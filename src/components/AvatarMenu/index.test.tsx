import { getInitials, stringAvatar } from ".";

describe("AvatarMenu helpers", () => {
  it("builds initials from available user name parts", () => {
    expect(getInitials({ firstName: "Aria", lastName: "Test" })).toBe("AT");
    expect(getInitials({ firstName: "Aria" })).toBe("A");
    expect(getInitials({ lastName: "Test" })).toBe("T");
    expect(getInitials({})).toBe("");
  });

  it("builds avatar props without crashing for partial user data", () => {
    expect(() => stringAvatar({ lastName: "Test" })).not.toThrow();
    expect(stringAvatar({ lastName: "Test" }).children).toBe("T");
  });
});
