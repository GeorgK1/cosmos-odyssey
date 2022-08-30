import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import PlanetsDropdown from './PlanetsDropdown';
//given

it('should allow user to change the planets in select', () => {
    render(<PlanetsDropdown />);

    //find and select Mercury for example
    screen.getByRole('option', { name: 'Mercury' });

    expect(screen.getByRole('option', { name: 'Mercury' }).selected).toBe(true);
});

it('should display the correct number of options', () => {
    render(<PlanetsDropdown />);
    expect(screen.getAllByRole('option').length).toBe(8);
});

//when

//then
