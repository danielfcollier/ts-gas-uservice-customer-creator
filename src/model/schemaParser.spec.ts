import * as TypeMoq from "typemoq";

import schemaParser from "./schemaParser";

test("basic test", () => {
  const mock = TypeMoq.Mock.ofInstance(schemaParser);
  mock
    .setup((f) => f(1))
    .returns(() => {
      return 1;
    });
  expect(mock.object(1)).toBe(1);
});
