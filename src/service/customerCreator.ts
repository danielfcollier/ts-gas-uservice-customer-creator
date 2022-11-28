import schemaParse from "../model/schemaParser";
import createFolderStructure from "./createFolderStructure";
import config from "../config";

function customerCreator(dbConnection) {
  const data = dbConnection.ReadAll();

  data.forEach((element) => {
    const customer = schemaParse(element);

    const isFolderCreated = createFolderStructure(customer);
    if (!isFolderCreated) {
      throw new Error();
    }

    const { id } = customer;
    // @ts-ignore
    const { deletedAt } = DbSheets.Delete(dbConnection, id);
    if (!deletedAt) {
      throw new Error();
    }

    // @ts-ignore
    const { createdAt } = DbSheets.Create(dbConnection, customer);
    if (!createdAt) {
      throw new Error();
    }
  });

  return { status: config.status.ok };
}

export default customerCreator;
