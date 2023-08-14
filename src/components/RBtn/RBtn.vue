<template>
  <div>
    <button type="button" :class="classes" v-bind="$attrs" @click="onClicked">
      <!-- @slot default slot -->
      <slot>Button</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { getSizeClass, getStyleClass, getWidthClass } from "../../utils/buttonClassResolver"
import { ButtonColor, ButtonSize, ButtonStyle, ButtonWidth } from "../../@types"

import { computed } from "vue"

export interface RBtnProps {
  buttonColor?: ButtonColor
  buttonSize?: ButtonSize
  buttonStyle?: ButtonStyle
  buttonWidth?: ButtonWidth
}

const props = withDefaults(defineProps<RBtnProps>(), {
  buttonColor: ButtonColor.primary,
  buttonSize: ButtonSize.normal,
  buttonStyle: ButtonStyle.solid,
  ButtonWidth: ButtonWidth.normal
})

const emit = defineEmits(["clicked"])

const onClicked = () => {
  emit("clicked")
}

const classes = computed(() => {
  return [
    "r-btn",
    "rvt-button",
    getSizeClass(props.buttonSize),
    getStyleClass(props.buttonStyle, props.buttonColor),
    getWidthClass(props.buttonWidth)
  ].filter((x) => x)
})
</script>
