import { useState } from 'react';
import ShowTravel from '../ShowTravel';
import { Formik, Field, Form } from 'formik';
import PlanetsDropdown from '../PlanetsDropdown/PlanetsDropdown';
const TravelSelection = () => {
    const [from, setFrom] = useState('Mercury');
    const [to, setTo] = useState('Mercury');

    const handleFromSelect = (event) => {
        const value = event.target.value;
        setFrom(value);
    };

    const handleToSelect = (event) => {
        const value = event.target.value;
        setTo(value);
    };

    return (
        <Formik>
            <Form>
                <div>
                    <h1>FROM</h1>
                    <PlanetsDropdown handleSelect={handleFromSelect} />
                </div>

                <div>
                    <h1>TO</h1>
                    <PlanetsDropdown handleSelect={handleToSelect} />
                </div>

                <ShowTravel from={from} to={to} />

                <button>Book travel</button>
            </Form>
        </Formik>
    );
};
export default TravelSelection;
