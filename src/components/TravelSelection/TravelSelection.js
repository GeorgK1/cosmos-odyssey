import { useState } from 'react';
import ShowTravel from '../ShowTravel';
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
        <>
            <div>
                <h1>FROM</h1>
                <PlanetsDropdown handleSelect={handleFromSelect} />
            </div>
            <div>
                <h1>TO</h1>
                <PlanetsDropdown handleSelect={handleToSelect} />
            </div>
            <ShowTravel from={from} to={to} />
            <button type='submit'>Book travel</button>
        </>
    );
};
export default TravelSelection;
