import { getByLabelText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';
import ProviderInformation from './ProviderInformation';

const mockedOnChange = jest.fn();

it('should render information about the provider to the screen', () => {
    render(<ProviderInformation />);
    expect(screen.getByTestId('provider-info-radio')).toBeInTheDocument();
    expect(screen.getByTestId('provider-info-price')).toBeInTheDocument();
    expect(screen.getByTestId('provider-info-start')).toBeInTheDocument();
    expect(screen.getByTestId('provider-info-end')).toBeInTheDocument();
});
it('should render correct information from the props', () => {
    render(
        <ProviderInformation
            price={'31641.4'}
            flightStart={'2022-09-15T20:15:22.5276652Z'}
            flightEnd={'2022-09-13T05:18:22.5276652Z'}
        />
    );
    const price = screen.getByTestId('provider-info-price');
    expect(price.textContent).toBe('Price: 31641.4');

    const start = screen.getByTestId('provider-info-start');
    expect(start.textContent).toBe(
        'Flight start: 2022-09-15T20:15:22.5276652Z'
    );

    const end = screen.getByTestId('provider-info-end');
    expect(end.textContent).toBe('Flight end: 2022-09-13T05:18:22.5276652Z');
});

it('should call onChange function when radio group value changes', () => {
    render(<ProviderInformation onChange={mockedOnChange} />);

    const radioGroup = screen.getByTestId('provider-info-radio');
    userEvent.click(radioGroup);
    expect(mockedOnChange).toHaveBeenCalled();
});
