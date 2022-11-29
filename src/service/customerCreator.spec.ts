import * as TypeMoq from "typemoq";

import customerCreator from "./customerCreator";

test("basic test", () => {
  const mock = TypeMoq.Mock.ofInstance(customerCreator);
  mock
    .setup((x) => x(1))
    .returns((data) => {
      return {
        status: 200,
        message: "hello",
      };
    });
  expect(mock.object(1).status).toBe(200);
});
