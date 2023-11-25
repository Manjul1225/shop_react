import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Cart from '../src/Pages/Cart';

describe('Cart test', () => {
    it('Cart: render Component Correctly', () => {
        const cartComp = render(<Cart />);

        expect(cartComp).toBeTruthy();
    });
});
