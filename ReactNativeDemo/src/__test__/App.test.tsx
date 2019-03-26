import { shallow } from "enzyme";
import React from "react";
import App from "../App";

const createTestProps = (props: object) => ({
  ...props
});

describe("#App", () => {
  it("should render a <View />", () => {
    const props = createTestProps({});
    const wrapper = shallow<App>(<App {...props} />);

    expect(wrapper.find("View")).toHaveLength(1);
  })
});