import TypeMoq from "typemoq";

import schemaValidator from "./schemaValidator";

test("basic test", () => {
  const mock = TypeMoq.Mock.ofInstance(schemaValidator);
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
