import { useState } from 'react';
import ProviderInformation from '../ProviderInformation/ProviderInformation';

const TravelProviderDropDown = (props) => {
    const [routeProviders, setRouteProviders] = useState();

    const [routePrice, setRoutePrice] = useState();

    const handleRouteProvidersSelect = (event) => {
        const selection = event.target.value;
        setRouteProviders(selection);
    };

    const handlePriceRadioButtonChange = (event) => {
        const selection = event.target.value;

        console.log(selection);
        setRoutePrice(routePrice);
    };

    return (
        <>
            {props.providers.map((provider) => {
                if (provider.company.name === routeProviders) {
                    return (
                        <ProviderInformation
                            price={provider.price}
                            flightStart={provider.flightEnd}
                            flightEnd={provider.flightStart}
                            name={provider.company.name}
                            onChange={handlePriceRadioButtonChange}
                        />
                    );
                }
            })}
            <select
                name='routes'
                id='routes'
                onChange={handleRouteProvidersSelect}
                data-testid='route-provider-select'>
                {props.providers.map((provider, index) => {
                    return (
                        <option key={provider.id} value={provider.company.name}>
                            {provider.company.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default TravelProviderDropDown;
