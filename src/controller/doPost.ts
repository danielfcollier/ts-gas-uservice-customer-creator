// This will work as a Webhook for the Service

import registerToQueue from "../queue/registerToQueue";
import dbConnection from "../config/dbConnection"

function doPost(data) {
  const isAuthorized = true;

  if (!isAuthorized) {
    return;
  }

  const response = registerToQueue(data, dbConnection.queue);
  const { status, message } = response;

  return { status, message };
}

export default doPost;
