import React from "react";
import { shallow } from "enzyme";
import Root from "../../containers/root";

describe("root component", () => {
  const storeWrapper = shallow(<Root />);
  it("expect root to render", () => {
    expect(storeWrapper).toMatchSnapshot();
  });

  it("checking the children of the root component", () => {
    expect(storeWrapper.children.length).toEqual(1);
  });
});
