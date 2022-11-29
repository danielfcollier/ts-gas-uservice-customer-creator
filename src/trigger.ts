import dbSettings from "./config/dbConnection";

function trigger() {
  const data = {
    id: "1",
    name: "Daniel Collier",
    age: 37,
    documentId: "00321278127",
    postalCode: "88064-092",
  };

  // @ts-ignore
  const dbConnection = DbSheets.Connect(dbSettings.id, dbSettings.table.queue, dbSettings.schema);

  // @ts-ignore
  const response = DbSheets.Create(dbConnection, data);
  console.log(response);
}

export default trigger;
