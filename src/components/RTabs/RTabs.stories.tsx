// RTabs.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/vue3'
import RTabs from './RTabs.vue'
import * as DocBlock from "@storybook/blocks"

import {
  Controls,
  Description,
  Story,
  Subtitle,
  Title,
  Primary as PrimaryDocBlock,
} from '@storybook/blocks'

// Define the component metadata for Storybook
const meta: Meta<typeof RTabs> = {
  title: 'Components/RTabs',
  component: RTabs,
  args: {
    selectedTab: 0,
    tabNames: [ 'Tab one', 'Tab two', 'Tab three', 'Tab four' ],
    tabsLabel: 'Tabs',
    tabsAriaLabel: 'Tabs',
    emit: [ 'update:selectedTab' ],
  },
  tags: ['autodocs', 'tabs'],
  parameters: {
    componentSubtitle: 'A component for displaying tabs',
    page: () => (<>
      <DocBlock.Title />
      <Description />
      <Subtitle />

      <PrimaryDocBlock />
      <Controls />

      <Stories includePrimary />
      </>
    )
  },
  argTypes: {
    onClick: { actions: 'clicked' },
    selectedTab: {
      control: {
        type: 'select',
        options: [ 0, 1, 2, 3 ]
      },
      description: 'The index of the tab that is selected'
    },
    tabNames: {
      control: {
        type: 'array'
      },
      description: 'The names of the tabs'
    },
    tabsLabel: {
      control: {
        type: 'text'
      },
      description: 'The label for the tabs'
    },
    tabsAriaLabel: {
      control: {
        type: 'text'
      },
      description: 'The aria-label for the tabs'
    },
    emit: {
      control: {
        type: 'array'
      },
      description: 'The events emitted by the component'
    }
  }
}

export default meta
type Story = StoryObj<typeof RTabs>

export const Primary: Story = {
  name: 'Default Tabs',
  // render: (args) => ({
  //   components: { RTabs },
  //   setup() {
  //     return { args }
  //   },
  //   template: '<RTabs { ...args } />'
  // }),
  // args: {}
}

export const DefaultTabsWithIds: Story = {
  args: {
    ...Primary.args,
    selectedTab: 2
  },
  name: 'Tabs with specified tab and panel id'
}
