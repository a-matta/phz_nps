import { render, screen } from "@testing-library/react";
import App from "./App";
import SurveyFormFunctional from "./components/SurveyFormFunctional";
import user from "@testing-library/user-event";

test("renders header", () => {
  render(<App />);
  const header = screen.getByText(/Not Supported/i);
  expect(header).toBeVisible();
});
describe("sendData when clicking submit button", () => {
  test("renders SurveyForm", () => {
    render(<SurveyFormFunctional />);

    expect(
      screen.getByRole("heading", { name: /Not Supported/i })
    ).toBeVisible();
    const submitButton = screen.getByTestId("button");

    expect(submitButton).toBeVisible();
    user.click(submitButton);
  });
});
