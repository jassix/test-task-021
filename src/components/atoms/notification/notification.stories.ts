import '@/app/styles/global.css'

import type { Meta, StoryObj } from '@storybook/vue3'

import Notification from './notification.vue'

const meta: Meta<typeof Notification> = {
  component: Notification,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof Notification>

export const Icon: Story = {
  name: 'Notification',
  render: () => ({
    components: { Notification },
    template: '<Notification />',
  }),
}
