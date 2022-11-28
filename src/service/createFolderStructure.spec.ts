import TypeMoq from "typemoq";

import createFolderStructure from "./createFolderStructure";

test("basic test", () => {
  const mock = TypeMoq.Mock.ofInstance(createFolderStructure);
  mock
    .setup((f) => f(1))
    .returns(() => {
      return true;
    });
  expect(mock.object(1)).toBeTruthy();
});
