import { ButtonColor, ButtonStyle, ButtonSize } from "../@types"

export const getSizeClass = (buttonSize: ButtonSize) => {
  switch (buttonSize) {
    case ButtonSize.normal:
      return ""
    case ButtonSize.small:
      return "rvt-button--small"
  }
}

export const getStyleClass = (buttonStyle: ButtonStyle, buttonColor: ButtonColor) => {
  switch (buttonStyle) {
    case ButtonStyle.solid:
      switch (buttonColor) {
        case ButtonColor.primary:
          return "rvt-button--primary"
        case ButtonColor.success:
          return "rvt-button--success"
        case ButtonColor.danger:
          return "rvt-button--danger"
      }
      break

    case ButtonStyle.outline:
      switch (buttonColor) {
        case ButtonColor.primary:
          return "rvt-button--secondary"
        case ButtonColor.success:
          return "rvt-button--success-secondary"
        case ButtonColor.danger:
          return "rvt-button--danger-secondary"
      }
      break

    case ButtonStyle.plain:
      switch (buttonColor) {
        case ButtonColor.primary:
          return "rvt-button--plain"
        case ButtonColor.danger:
          return "rvt-button--plain r-btn-plain--danger"
        case ButtonColor.success:
          return "rvt-button--plain r-btn-plain--success"
      }
  }
}
