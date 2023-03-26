import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { mount } from "enzyme";
import App from "./App";
import AuthLayout from "./AuthLayout";
import AdminLayout from "./AdminLayout";

describe("App component", () => {
  it("renders the AuthLayout component when the route is /auth", () => {
    const wrapper = mount(
      <HashRouter initialEntries={["/auth"]}>
        <App />
      </HashRouter>
    );
    expect(wrapper.find(AuthLayout)).toHaveLength(1);
    expect(wrapper.find(AdminLayout)).toHaveLength(0);
  });

  it("renders the AdminLayout component when the route is /admin", () => {
    const wrapper = mount(
      <HashRouter initialEntries={["/admin"]}>
        <App />
      </HashRouter>
    );
    expect(wrapper.find(AuthLayout)).toHaveLength(0);
    expect(wrapper.find(AdminLayout)).toHaveLength(1);
  });

  it("redirects to /admin/dashboard when the route is /", () => {
    const wrapper = mount(
      <HashRouter initialEntries={["/"]}>
        <App />
      </HashRouter>
    );
    expect(wrapper.find(AuthLayout)).toHaveLength(0);
    expect(wrapper.find(AdminLayout)).toHaveLength(1);
  });

  // Uncomment this test case when the RTLLayout component is implemented
  // it("renders the RTLLayout component when the route is /rtl", () => {
  //   const wrapper = mount(
  //     <HashRouter initialEntries={["/rtl"]}>
  //       <App />
  //     </HashRouter>
  //   );
  //   expect(wrapper.find(RTLLayout)).toHaveLength(1);
  // });
});
