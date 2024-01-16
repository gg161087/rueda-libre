import { Carousel } from './Carousel.jsx';
import { FormRent } from './FormRent.jsx';

import './Rent.css';

export const Rent = ({bikes}) => {
    return (
        <section id="rent">
            <Carousel bikes={bikes}></Carousel>
            <FormRent></FormRent>
        </section>
    )
}