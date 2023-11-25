import { PropTypes } from 'prop-types';
import { HalfStar, EmptyStar, FullStar } from './Stars';

function RatingStars({ rate }) {
    const arrayStar = setArrayStar();

    function setArrayStar() {
        let arrayStar = [];
        let cpyRate = Number(rate);

        for (; cpyRate >= 1; cpyRate--) {
            arrayStar.push(<FullStar key={cpyRate * 78945} />);
        }

        if (arrayStar.length != 5 && cpyRate >= 0.5 && cpyRate < 0.9) {
            arrayStar.push(<HalfStar key={cpyRate * 10 * 4854} />);
        }

        while (arrayStar.length < 5) {
            arrayStar.push(<EmptyStar key={arrayStar.length * 48951} />);
        }

        return arrayStar;
    }

    return <p className='font-semibold text-yellow-400 md:ml-4 text-xl lg:text-2xl'>{arrayStar}</p>;
}

RatingStars.propTypes = {
    rate: PropTypes.number.isRequired
};

export default RatingStars;
