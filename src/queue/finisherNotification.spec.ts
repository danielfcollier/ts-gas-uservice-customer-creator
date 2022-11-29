import * as TypeMoq from "typemoq";

import finisherNotification from "./finisherNotification";

test("basic test", () => {
  const mock = TypeMoq.Mock.ofInstance(finisherNotification);
  mock
    .setup((f) => f(1))
    .returns((data) => {
      return true
    });
  expect(mock.object(1)).toBeTruthy();
});
