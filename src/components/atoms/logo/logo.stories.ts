import '@/app/styles/global.css'

import type { Meta, StoryObj } from '@storybook/vue3'

import Logo from './logo.vue'

const meta: Meta<typeof Logo> = {
  component: Logo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Icon: Story = {
  name: 'Logo',
  render: () => ({
    components: { Logo },
    template: '<Logo />',
  }),
}
