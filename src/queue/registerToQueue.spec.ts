import * as TypeMoq from "typemoq";

import registerToQueue from "./registerToQueue";

test("Register to Queue Successfully", () => {
  const mock = TypeMoq.Mock.ofInstance(registerToQueue);
  mock
    .setup((f) => f(1, 1))
    .returns(() => {
      return {
        status: 201,
        message: { createdAt: new Date() },
      };
    });
  expect(mock.object(1, 1).status).toBe(201);
  expect(mock.object(1, 1).message.hasOwnProperty("createdAt")).toBeTruthy();
});
