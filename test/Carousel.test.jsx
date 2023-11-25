import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect } from 'vitest';
import img1 from '/src/images/banner1.webp';
import img2 from '/src/images/banner2.webp';
import img3 from '/src/images/banner3.webp';
import img4 from '/src/images/banner4.webp';

import Carousel from '../src/components/Home/Carousel';

describe('Carousel test', () => {
    beforeEach(() => {
        render(
            <Carousel>
                <img
                    src={img1}
                    alt='banner 1'
                    key={789456}
                    style={{ width: '100%', height: '100%' }}
                />
                <img
                    src={img2}
                    alt='banner 2'
                    key={789457}
                    style={{ width: '100%', height: '100%' }}
                />
                <img
                    src={img3}
                    alt='banner 3'
                    key={789458}
                    style={{ width: '100%', height: '100%' }}
                />
                <img
                    src={img4}
                    alt='banner 4'
                    key={789459}
                    style={{ width: '100%', height: '100%' }}
                />
            </Carousel>
        );
    });

    it('Carousel: render Component 4 img', () => {
        const wrapper = render(
            <Carousel>
                <img
                    src={img1}
                    alt='banner 1'
                    key={789456}
                    style={{ width: '100%', height: '100%' }}
                />
                <img
                    src={img2}
                    alt='banner 2'
                    key={789457}
                    style={{ width: '100%', height: '100%' }}
                />
                <img
                    src={img3}
                    alt='banner 3'
                    key={789458}
                    style={{ width: '100%', height: '100%' }}
                />
                <img
                    src={img4}
                    alt='banner 4'
                    key={789459}
                    style={{ width: '100%', height: '100%' }}
                />
            </Carousel>
        );
        expect(wrapper).toBeTruthy();
    });

    it('Carousel: render Component 1 img', () => {
        const wrapper = render(
            <Carousel>
                <img
                    src={img1}
                    alt='banner 1'
                    key={789456}
                    style={{ width: '100%', height: '100%' }}
                />
            </Carousel>
        );
        expect(wrapper).toBeTruthy();
    });

    it('Carousel: there are 2 btn', () => {
        const btn = screen.getAllByRole('button');
        expect(btn.length).toBe(2);
    });

    it('Carousel: click next btn', () => {
        const nextBtn = screen.getByLabelText('go next button image caroussel')
        for (let i = 0; i < 5; i++) {
            fireEvent.click(nextBtn);
        }
    });

    it('Carousel: click prev btn', () => {
        const prevBtn = screen.getByLabelText('go previous button image caroussel')
        for (let i = 0; i < 5; i++) {
            fireEvent.click(prevBtn);
        }
    });
});
