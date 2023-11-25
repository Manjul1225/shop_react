import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../src/components/Footer/Footer';

describe('Footer test', () => {
    it('Footer: render Component Correctly', () => {
        const footerComp = render(<Footer />);

        expect(footerComp).toBeTruthy();
    });
});
