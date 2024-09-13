import '@/app/styles/global.css'

import type { Meta, StoryObj } from '@storybook/vue3'

import { paths } from '@/app/router'

import Navbar from './navbar.vue'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const NavbarStory: Story = {
  name: 'Navbar',
  args: {
    items: [
      {
        label: 'Преимущества Tele2',
        href: paths.advantages,
      },
      {
        label: 'Тарифы',
        href: paths.tariffs,
      },
      {
        label: 'Акции и спецпредложения',
        href: paths.offers,
      },
      {
        label: 'Промотариф Tele2',
        href: paths.promotional,
      },
      {
        label: 'Технология eSIM',
        href: paths.esim,
      },
      {
        label: 'Подключение нового абонента',
        href: paths.connection,
      },
    ],
  },
  render: (args) => ({
    components: { Navbar },
    setup() {
      return { args }
    },
    template: '<Navbar :items="args.items" />',
  }),
}
