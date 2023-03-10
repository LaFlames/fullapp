import {Button} from 'shared/ui/Button/Button';
import {render, screen} from '@testing-library/react';

describe('button', () => {
    test('render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with theme', () => {
        render(<Button theme='CLEAR'>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});