import config from "../config";
import schemaValidator from "../model/schemaValidator";

function registerToQueue(dbConnection, data) {
  const isSchemaValidated = schemaValidator(data);

  if (!isSchemaValidated) {
    return { status: 400, message: "Bad request" };
  }

  // @ts-ignore
  const { createdAt } = DbSheets.Create(dbConnection, data);

  return { status: config.status.created, message: { createdAt } };
}

export default registerToQueue;
