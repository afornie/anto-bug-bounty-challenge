import UserStore from "./store";
import { ActionResultStatus } from "../../../types/global";

describe("UserStore", () => {
  it("stores the loaded user on getOwnUser", async () => {
    const store = new UserStore();

    const result = await store.getOwnUser();

    expect(result.status).toBe(ActionResultStatus.SUCCESS);
    expect(store.user).toEqual({
      firstName: "Aria",
      lastName: "Test",
      eMail: "linda.bolt@osapiens.com"
    });
  });
});
