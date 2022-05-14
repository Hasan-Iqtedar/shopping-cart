import { render } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

it("Renders a product", () => {
  const product = {
    image: null,
    title: "abc",
    price: 123,
  };

  const { container } = render(<ProductCard data={product} />);

  expect(container).toMatchSnapshot();
});
