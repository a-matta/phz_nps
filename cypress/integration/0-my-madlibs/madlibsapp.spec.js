import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

describe("The Promoter Score Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("form can be submitted with a message", () => {
    const rating = Math.floor(Math.random() * 10) + 1;
    const feedback = lorem.generateWords(7);
    cy.log(rating);
    cy.get(`button[class^=surveyform_circle][value=${rating}]`).click();
    cy.get("form[class^=surveyform_form]")
      .get("textarea[name=message]")
      .type(feedback);
    cy.screenshot();
    cy.get("button[class^=surveyform_submitButton__af3z3]").click();
    cy.get("p[id^=fadeOut]").should("be.visible");
  });
  it("form can be submitted without a message", () => {
    const rating = Math.floor(Math.random() * 10) + 1;
    cy.log(rating);
    cy.get(`button[class^=surveyform_circle][value=${rating}]`).click();
    cy.get("button[class^=surveyform_submitButton__af3z3]").click();
    cy.get("p[id^=fadeOut]").should("be.visible");
  });
  it("form can be closed without giving feedback", () => {
    cy.get("button[class^=surveyform_closeButton]").click();
    cy.get("div[class^=surveyform_container]").should("not.be.visible");
  });
});
