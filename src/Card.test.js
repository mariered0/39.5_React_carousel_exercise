import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("it renders without crashing", () => {
  render(<Card />);
});

//snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Card caption="Beach" src="image1" currNum="1" totalNum="1" />
  );
  expect(asFragment()).toMatchSnapshot();
});
