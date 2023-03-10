import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import {renderWithAllWrappers} from 'shared/lib/tests/renderWithAllWrappers/renderWithAllWrappers';

describe('sidebar', () => {
    test('render', () => {
        renderWithAllWrappers(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithAllWrappers(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleButton);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});