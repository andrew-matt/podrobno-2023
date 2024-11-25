import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};