import dbConnection from "./config/dbConnection";
import customerCreator from "./service/customerCreator";

function service() {
  const response = customerCreator(dbConnection);
  console.log(response);
}

export default service;
