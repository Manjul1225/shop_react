import * as React from 'react';
import { render, screen, fireEvent, mount } from '@testing-library/react';
import NavBar from '../src/components/Navbar/NavBar';
import { beforeEach, describe, expect, test } from 'vitest';
// Tests that the component renders without errors

// --------------------    Navbar testing     --------------------------------
describe('Navbar test', () => {
    it('Navbar: render Component correctly', () => {
        const NavbarComponent = render(<NavBar />);

        expect(NavbarComponent).toBeTruthy();
    });
    // --------------------    Title testing     --------------------------------
    it('test_display_title', () => {
        render(<NavBar />);
        const title = screen.getByText(/Reactshop/i);
        expect(title).toBeDefined();
        expect(title).toBeInTheDocument();
    });
    // --------------------    Menu testing     --------------------------------
    it('test_toggle_menu if url is correct', () => {
        render(<NavBar />);
        const home = screen.getByText(/home/i);
        const About = screen.getByText(/about/i);
        const contact = screen.getByText(/contact/i);

        fireEvent.click(document.getElementById('nextBtn'));
        fireEvent.click(document.getElementById('nextBtn'));
        fireEvent.click(document.getElementById('nextBtn'));

        expect(home.href).toContain('/home');
        expect(About.href).toContain('/about');
        expect(contact.href).toContain('/contact');
    });

    // --------------------    Search testing     --------------------------------
    it('checks if all product id is available on search input', () => {});

    it('search button takes you to selected product', () => {
        fireEvent.click(document.getElementById('nextBtn'));
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    });

    // --------------------    Cart testing     --------------------------------
    test('should not show the cart at the start', () => {
        const cart = screen.getByText(/Content/i);
        // expect().toBeUndefined()
    });

    it('test cart icon count', () => {
        fireEvent.click(document.getElementById('nextBtn'));
    });

    it('test_handle_cart_with_many_items', () => {});

    it('test remove button on all items in cart', () => {
        fireEvent.click(document.getElementById('nextBtn'));
    });

    it('test the total from cart items', () => {
        expect(' ').toBe(3);
    });

    it('test the go to cart button redirect', () => {
        fireEvent.click(document.getElementById('nextBtn'));
    });
    // beforeEach(() => {
    // 	render(<Accordion title='Testing'><h4>Content</h4></Accordion>);
    // });

    test('should not show the content at the start', () => {
        // expect(screen.getByText(/Content/i)).toBeUndefined()
    });
});
