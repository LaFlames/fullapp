import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from './Button';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children : 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
    children : 'Text',
    theme: 'CLEAR'
};

export const Outline = Template.bind({});
Outline.args = {
    children : 'Text',
    theme: 'OUTLINE'
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children : 'Text',
    theme: 'OUTLINE'
};
OutlineDark.decorators = [ThemeDecorator('dark')];