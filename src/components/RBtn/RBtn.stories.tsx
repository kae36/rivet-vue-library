// RBtn.stories.tsx

import type { Meta, StoryObj } from "@storybook/vue3"

import RBtn from "./RBtn.vue"
import { ButtonColor, ButtonSize, ButtonStyle, ButtonWidth } from "../../@types"

const meta: Meta<typeof RBtn> = {
  component: RBtn,
  title: "RBtn",
  argTypes: {
    buttonColor: {
      control: {
        type: "select",
        options: Object.values(ButtonColor)
      }
    },
    buttonSize: {
      control: {
        type: "select",
        options: Object.values(ButtonSize)
      }
    },
    buttonStyle: {
      control: {
        type: "select",
        options: Object.values(ButtonStyle)
      }
    },
    buttonWidth: {
      control: {
        type: "select",
        options: Object.values(ButtonWidth)
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        type: "code"
      },
      description: {
        component: "Button component",
        story: "Button component",
        subcomponents: {
          RBtn: "Button component",
          RBtnGroup: "Button group component",
          RBtnIcon: "Button icon component"
        }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof RBtn>

export const Default: Story = {
  render: () => ({
    title: "RBtn",
    components: { RBtn },
    args: {
      buttonColor: ButtonColor.primary,
      buttonSize: ButtonSize.normal,
      buttonStyle: ButtonStyle.solid
    },
    template: "<RBtn>Button</RBtn>"
  })
}

export const Secondary: Story = {
  render: () => ({
    title: "RBtn",
    components: { RBtn },
    args: {
      buttonColor: ButtonColor.primary,
      buttonSize: ButtonSize.normal,
      buttonStyle: ButtonStyle.outline
    },
    template: "<RBtn>Secondary</RBtn>"
  })
}

export const Outline: Story = {
  render: () => ({
    props: {
      buttonColor: ButtonColor.primary,
      buttonSize: ButtonSize.normal,
      buttonStyle: ButtonStyle.outline
    },
    template: "<RBtn>Button</RBtn>"
  })
}

export const Plain: Story = {
  render: () => ({
    props: {
      buttonColor: ButtonColor.primary,
      buttonSize: ButtonSize.normal,
      buttonStyle: ButtonStyle.plain
    },
    template: "<RBtn>Plain Button</RBtn>"
  })
}

export const Custom: Story = {
  render: () => ({
    components: { RBtn },
    prop: {
      buttonColor: ButtonColor.primary,
      buttonSize: ButtonSize.normal,
      buttonStyle: ButtonStyle.solid
    },
    template: "<RBtn>Custom slot content</RBtn>"
  })
}
