const dbSettings = {
  id: "1gL-FS1b5xLAGohitDYwC9n_5o4q9B1ycCSy6A7bJw5M",
  table: {
    queue: "QUEUE",
    data: "DATA",
  },
  schema: ["id", "name", "age", "documentId", "postalCode"],
};

const dbConnection = {
  // @ts-ignore
  queue: DbSheets.Connect(dbSettings.id, dbSettings.table.queue, dbSettings.schema),
  // @ts-ignore
  data: DbSheets.Connect(dbSettings.id, dbSettings.table.data, dbSettings.schema),
};

export default dbConnection;
