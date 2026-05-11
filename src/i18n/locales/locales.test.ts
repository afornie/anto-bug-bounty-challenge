import de from "./de.json";
import en from "./en.json";

describe("locale files", () => {
  it("keeps the bold intro marker in both supported languages", () => {
    expect(en.home.intro).toContain("<b>known</b>");
    expect(de.home.intro).toContain("<b>bekannten</b>");
  });

  it("provides German translations for the language switcher target", () => {
    expect(de.logout).toBeTruthy();
    expect(de.appTitle).toBeTruthy();
    expect(de.routes["/home"]).toBeTruthy();
    expect(de.home.welcome).toBeTruthy();
    expect(de.home.sidenote).toBeTruthy();
  });
});
