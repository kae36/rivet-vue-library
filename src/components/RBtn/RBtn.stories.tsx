// RBtn.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/vue3-vite'

import RBtn from './RBtn.vue'

const meta: Meta<typeof RBtn> = {
  component: RBtn,
}

export default meta
type Story = StoryObj<typeof RBtn>
const Template: Story = (args) => ({
  components: { RBtn },
  setup() {
    return { args }
  },
  template: '<RBtn v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  secondary: true,
}

export const Large = Template.bind({})
Large.args = {
  label: 'Button',
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
  size: 'small',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  disabled: true,
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  loading: true,
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Button',
  icon: 'fas fa-heart',
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
}

export const IconOnlySmall = Template.bind({})
IconOnlySmall.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  size: 'small',
}

export const IconOnlyLarge = Template.bind({})
IconOnlyLarge.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  size: 'large',
}

export const IconOnlyDisabled = Template.bind({})
IconOnlyDisabled.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  disabled: true,
}

export const IconOnlyLoading = Template.bind({})
IconOnlyLoading.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  loading: true,
}

export const IconOnlyPrimary = Template.bind({})
IconOnlyPrimary.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  primary: true,
}

export const IconOnlySecondary = Template.bind({})
IconOnlySecondary.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  secondary: true,
}

export const IconOnlyPrimarySmall = Template.bind({})
IconOnlyPrimarySmall.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  primary: true,
  size: 'small',
}

export const IconOnlySecondarySmall = Template.bind({})
IconOnlySecondarySmall.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  secondary: true,
  size: 'small',
}

export const IconOnlyPrimaryLarge = Template.bind({})
IconOnlyPrimaryLarge.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  primary: true,
  size: 'large',
}

export const IconOnlySecondaryLarge = Template.bind({})
IconOnlySecondaryLarge.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  secondary: true,
  size: 'large',
}

export const IconOnlyPrimaryDisabled = Template.bind({})
IconOnlyPrimaryDisabled.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  primary: true,
  disabled: true,
}

export const IconOnlySecondaryDisabled = Template.bind({})
IconOnlySecondaryDisabled.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  secondary: true,
  disabled: true,
}

export const IconOnlyPrimaryLoading = Template.bind({})
IconOnlyPrimaryLoading.args = {
  label: 'Button',
  icon: 'fas fa-heart',
  iconOnly: true,
  primary: true,
  loading: true,
}