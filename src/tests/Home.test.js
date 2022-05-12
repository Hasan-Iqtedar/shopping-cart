import { render } from "@testing-library/react";
import Home from "../components/Home";

test("Renders heading and image", () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});
