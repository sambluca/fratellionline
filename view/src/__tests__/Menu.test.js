import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Menu from "../Menu";

const onClick = jest.fn();
const render = (open = false) =>
  mount(
    <MemoryRouter>
      <Menu open={open} onClick={onClick} />
    </MemoryRouter>
  );
test("Render the menu", () => {
  const menu = render().find(".fo-menu");

  expect(menu.exists()).toBe(true);
  expect(menu.hasClass('fo-menu__open')).toBe(false);
});

test("Render the menu open", () => {
  const menu = render(true).find(".fo-menu");

  expect(menu.exists()).toBe(true);
  expect(menu.hasClass('fo-menu__open')).toBe(true);
});


test("Render all the menus children", () => {
  const wrapper = render().find(".fo-menu");
  const links = wrapper.find(".fo-menu-link").hostNodes();
  const linksText = links.map(link => link.text());
  expect(links.length).toBe(6);
  expect(linksText).toEqual([
    "HOME",
    "ABOUT US",
    "BARBER SHOP",
    "PRODUCTS",
    "AMERICAN CREW GIFT SETS",
    "CONTACT US"
  ]);
});

test("callback when link is clicked", () => {
  const wrapper = render().find(".fo-menu");
  const link = wrapper.find(".fo-menu-link").hostNodes().at(0);
  link.simulate('click');

  expect(onClick).toHaveBeenCalled();
});

