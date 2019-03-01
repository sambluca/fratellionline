import React from 'react';
import { mount } from 'enzyme';
import HamburgerButton from '../HamburgerButton';

const onClick = jest.fn();

test('renders button', () => {
  const button = mount(<HamburgerButton onClick={onClick} />).find('.fo-menu-button');

  expect(button.exists()).toBe(true);
});

test('renders hamburger button by default', () => {
    const hamburger = mount(<HamburgerButton onClick={onClick} />).find('.qa-hamburger');
    const closeMenu = mount(<HamburgerButton onClick={onClick} />).find('.qa-close-menu');

    expect(hamburger.exists()).toBe(true);
    expect(closeMenu.exists()).toBe(false);
});
  
test('renders hamburger button by default', () => {
    const hamburger = mount(<HamburgerButton onClick={onClick} clicked />).find('.qa-hamburger');
    const closeMenu = mount(<HamburgerButton onClick={onClick} clicked />).find('.qa-close-menu');

    expect(hamburger.exists()).toBe(false);
    expect(closeMenu.exists()).toBe(true);
});

test('calls onclick when button is clicked', () => {
    const button = mount(<HamburgerButton onClick={onClick} />).find('.fo-menu-button');
    
    button.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
  