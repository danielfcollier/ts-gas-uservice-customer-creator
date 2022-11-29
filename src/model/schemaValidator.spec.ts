import * as TypeMoq from "typemoq";

import schemaValidator from "./schemaValidator";

test("basic test", () => {
  const mock = TypeMoq.Mock.ofInstance(schemaValidator);
  mock
    .setup((f) => f(1))
    .returns(() => {
      return true;
    });
  expect(mock.object(1)).toBeTruthy();
});
