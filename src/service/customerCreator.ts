import schemaParse from "../model/schemaParser";
import createFolderStructure from "./createFolderStructure";
import config from "../config";

function customerCreator(dbConnection) {
  // @ts-ignore
  const data = DbSheets.ReadAll(dbConnection.queue);

  data.forEach((element) => {
    const customer = schemaParse(element);

    const isFolderCreated = createFolderStructure(customer);
    if (!isFolderCreated) {
      throw new Error();
    }

    const { id } = customer;
    // @ts-ignore
    const { deletedAt } = DbSheets.Delete(dbConnection.queue, id);
    if (!deletedAt) {
      throw new Error();
    }

    // @ts-ignore
    const { createdAt } = DbSheets.Create(dbConnection.data, customer);
    if (!createdAt) {
      throw new Error();
    }
  });

  return { status: config.status.ok };
}

export default customerCreator;
