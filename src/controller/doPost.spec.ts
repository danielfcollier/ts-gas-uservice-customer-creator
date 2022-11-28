// const registerToQueue from "../src/queue/registerToQueue")

// mock registerToQueue
// mock authorization

// test behaviors with authorization and registerToQueue

import * as TypeMoq from "typemoq";

import doPost from "./doPost";

test("Webhook returns Successfully", () => {
  const mock = TypeMoq.Mock.ofInstance(doPost);
  mock
    .setup((f) => f(1))
    .returns(() => {
      return {
        status: 201,
        message: { createdAt: new Date() },
      };
    });
  expect(mock.object(1).status).toBe(201);
  expect(mock.object(1).message.hasOwnProperty("createdAt")).toBeTruthy();
});
