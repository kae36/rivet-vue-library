// RTabs.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/vue3'

import RTabs from './RTabs.vue'

const meta: Meta<typeof RTabs> = {
  component: RTabs,
}

export default meta
type Story = StoryObj<typeof RTabs>

const Default: Story = {
  args: {
    selectedTab: 0,
    tabNames: [ 'Tab one', 'Tab two', 'Tab three', 'Tab four' ],
    panels: [
      'Become the best version of yourself at IU. Develop the skills you need for a rewarding career, and follow in the footsteps of more than 729,000 IU alumni who are leading organizations, innovating the future, and making an impact on their communities and the world.',
      '<span class="rvt-ts-23 rvt-text-bold">Find your calling</span><p>IU offers more than 2,300 different programs of study. Not sure what to focus on? No problem. Browse by interest area to find options you\'d enjoy pursuing.</p>',
      '<span class="rvt-ts-23 rvt-text-bold">Pursue your passion or explore the possibilities</span><p>From nursing to criminal justice, epidemiology to environmental science, social work to cybersecurity, and more than 900 academic programs in between, IU gives you the power to study whatever sparks your interest, with the support of world-class professors and faculty who care about your success.</p>',
      '<span class="rvt-ts-23 rvt-text-bold">Find your ideal campus life at IU</span><p>Each of our nine campuses offers a welcoming, inclusive environment that feels like home, whatever your background, interests, or goals. Whether you want a Big Ten college experience, the dynamic pace of an urban research university, the community feeling of a regional campus close to home, or the flexibility of a fully online degree program, you’ll find it at IU.</p>'
    ],
    tabsAriaLabel: 'Tabs',
  },
  template: `<r-tabs v-bind="$args" />`,
  name: 'Default Tabs'
}

export const DefaultTabs: Story = {
  args: {
    ...Default.args,
    label: 'RTabs',
  },
  name: 'Default Tabs'
}

export const DefaultTabsWithIds: Story = {
  args: {
    ...Default.args,
    label: 'RTabs'
  },
  name: 'Tabs with specified tab and panel id'
}
