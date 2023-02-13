import {classNames} from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedClass = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedClass);
    });

    test('with mods', () => {
        const expectedClass = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true},
            ['class1', 'class2']
        )).toBe(expectedClass);
    });

    test('with false mods', () => {
        const expectedClass = 'someClass class1 class2';
        expect(classNames('someClass',
            {hovered: false},
            ['class1', 'class2']
        )).toBe(expectedClass);
    });
});