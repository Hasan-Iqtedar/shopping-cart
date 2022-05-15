import { render, screen, waitFor } from "@testing-library/react";
import Products from "../components/Products";

const products = [
  {
    id: 0,
    image: "https://abc.png",
    price: 123,
    title: "abc",
    category: "clothing",
  },
];

global.fetch = () => Promise.resolve({ json: () => Promise.resolve(products) });

it("Does not render when loading", () => {
  render(<Products />);
  expect(screen.queryByText("abc")).toBeNull();
});

it("Renders when loaded", async () => {
  render(<Products />);

  await waitFor(() => expect(screen.queryByText("abc")).not.toBeNull());
});
