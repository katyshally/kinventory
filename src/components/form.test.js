
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component', () => {

    test('renders Artist', () => {
        render(<Form />);
        const chooseElement = screen.getByText('Artist');
        expect(chooseElement).toBeInTheDocument();
    });
});
    