import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { mockStore } from "../../mockStore/mockStore";
import Main from "../../containers/Main";
import StyledSelect from "../../components/StyledSelect";

StyledSelect.displayName = "StyledSelect";

let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <Provider store={mockStore({})}>
      <Main />
    </Provider>
  ).find(Main);
});

describe("Main component", () => {
  it("Take a snapshot of the main component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("test for Main", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("should show that the Main component exists", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
