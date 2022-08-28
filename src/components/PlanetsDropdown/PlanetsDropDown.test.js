import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlanetsDropdown from './PlanetsDropdown';
//given

it('should allow user to change the planets in select', () => {
    render(<PlanetsDropdown />);

    userEvent.selectOptions(
        //find and select Neptune for example
        screen.getByRole('option', { name: 'Mercury' })
    );

    expect(screen.getByRole('option', { name: 'Mercury' }).selected).toBe(true);
});

//when

//then
