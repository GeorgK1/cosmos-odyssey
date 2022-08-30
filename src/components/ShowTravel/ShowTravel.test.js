import { render, screen } from '@testing-library/react';
import { cosmosData } from '../../../dummydata/cosmosData';
import ShowTravel from './ShowTravel';
let routeMock = ['Jupiter', 'Venus', 'Earth', 'Uranus', 'Saturn'];

jest.mock('../../hooks/useCosmosApi', () => ({
    __esModule: true,
    default: () => {
        return cosmosData;
    },
}));

jest.mock('../../hooks/useRouteBetweenPlanets', () => ({
    __esModule: true,
    default: () => {
        return routeMock;
    },
}));

it('should display the travels using the hooks data', () => {
    render(<ShowTravel />);
    const routeHeading = screen.getByTestId('routes-from-to');
    expect(routeHeading.textContent).toBe('Mercury->Venus');
});
