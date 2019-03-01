import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import HamburgerButton from "../HamburgerButton";
import Menu from "../Menu";


const render = () =>
  mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

test("renders everything in the header", () => {
  const wrapper = render();
  const header = wrapper.find(".fo-header");
  const hamburgerButton = wrapper.find(HamburgerButton)

  expect(header.exists()).toBe(true);
  expect(hamburgerButton.exists()).toBe(true);
});

test("renders correct hamburger when clicked", () => {
    const wrapper = render(<Header />);
    const hamburgerButton = wrapper.find(HamburgerButton)

    expect(wrapper.find('.qa-hamburger').exists()).toBe(true);
    expect(wrapper.find('.qa-close-menu').exists()).toBe(false);
    hamburgerButton.simulate('click');
    expect(wrapper.find('.qa-hamburger').exists()).toBe(false);
    expect(wrapper.find('.qa-close-menu').exists()).toBe(true);
});

test("renders menu on hamburger click", () => {
    const wrapper = render(<Header />);
    const hamburgerButton = wrapper.find(HamburgerButton)

    expect(wrapper.find('.fo-menu').exists()).toBe(true);
    expect(wrapper.find('.fo-menu__open').exists()).toBe(false);

    hamburgerButton.simulate('click');

    expect(wrapper.find('.fo-menu').exists()).toBe(true);
    expect(wrapper.find('.fo-menu__open').exists()).toBe(true);

    hamburgerButton.simulate('click');

    expect(wrapper.find('.fo-menu').exists()).toBe(true);
    expect(wrapper.find('.fo-menu__open').exists()).toBe(false);
});

test("closes menu when link is clicked", () => {
  const wrapper = render(<Header />);
  const hamburgerButton = wrapper.find(HamburgerButton)
  const link = wrapper.find(Menu).find('.fo-menu-link').at(0)

  expect(wrapper.find('.fo-menu__open').exists()).toBe(false);

  hamburgerButton.simulate('click');

  expect(wrapper.find('.fo-menu__open').exists()).toBe(true);

  link.simulate('click')

  expect(wrapper.find('.fo-menu__open').exists()).toBe(false);
});


test("renders title", () => {
  const wrapper = render(<Header />);
  const title = wrapper.find('.fo-h1');

  expect(title.length).toBe(1);
  expect(title.text()).toBe("Fratelli Men's Hairdressing");
});
