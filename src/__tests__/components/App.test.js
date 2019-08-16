import React from "react";
import { shallow } from "enzyme";

import App from "../../components/App";
import Main from "../../containers/Main";
import OrderValue from "../../containers/OrderValue";

describe("App component", () => {
  const wrapper = shallow(<App />);

  it("renders App", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("check the number of children", () => {
    expect(wrapper.props().children.length).toEqual(3);
  });

  it("check if it renders Main component", () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  it("check if it renders orderValue component", () => {
    expect(wrapper.find(OrderValue)).toHaveLength(1);
  });
});

// describe("modal", () => {
//   it("check if it renders Modal component", () => {
//     const wrappers = mount(<Modal onclose={true} />);
//     expect(wrappers).toMatchSnapshot();
//     // console.log(wrappers.debug());
//     // expect(wrappers.find(Modal)).toHaveLength(1);
//   });
// });
