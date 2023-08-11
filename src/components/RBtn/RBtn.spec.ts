import { mount } from "@vue/test-utils"
import { describe, beforeEach, it, expect } from "vitest"
import RBtn from "./RBtn.vue"
import RBtnExample from "./RBtnExample.vue"
import { ButtonSize, ButtonStyle, ButtonColor } from "@/@types"

describe("RBtn with default style", () => {
  describe("with default color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {})
    })

    it("Should pass component initialization", () => {
      expect(wrapper.exists()).toBeTruthy()
    })

    it("Should have default classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--primary"])
    })

    it("Should have no text", () => {
      expect(wrapper.text()).toBe("Button")
    })

    it("Should emit click event", async () => {
      wrapper.find("button").trigger("click")

      expect(wrapper.emitted("clicked")).toBeTruthy()
    })
  })

  describe("with success color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonColor: ButtonColor.success
        }
      })
    })

    it("Should pass component initialization", () => {
      expect(RBtn).toBeTruthy()
    })

    it("Should have default classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--success"])
    })

    it("Should have no text", () => {
      expect(wrapper.text()).toBe("Button")
    })
  })

  describe("with danger color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonColor: ButtonColor.danger
        }
      })
    })

    it("Should pass component initialization", () => {
      expect(RBtn).toBeTruthy()
    })

    it("Should have default classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--danger"])
    })

    it("Should have no text", () => {
      expect(wrapper.text()).toBe("Button")
    })
  })
})

describe("RBtn with outline style", () => {
  describe("with default color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonStyle: ButtonStyle.outline
        }
      })
    })

    it("Should have correct classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--secondary"])
    })
  })

  describe("with success color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonStyle: ButtonStyle.outline,
          buttonColor: ButtonColor.success
        }
      })
    })

    it("Should have correct classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--success-secondary"])
    })
  })

  describe("with success color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonStyle: ButtonStyle.outline,
          buttonColor: ButtonColor.danger
        }
      })
    })

    it("Should have default classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--danger-secondary"])
    })
  })
})

describe("RBtn with plain style", () => {
  describe("with default color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonStyle: ButtonStyle.plain
        }
      })
    })

    it("Should have correct classes", () => {
      expect(wrapper.vm.classes).toEqual(["r-btn", "rvt-button", "rvt-button--plain"])
    })
  })

  describe("with success color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonStyle: ButtonStyle.plain,
          buttonColor: ButtonColor.success
        }
      })
    })

    it("Should have correct classes", () => {
      expect(wrapper.vm.classes).toEqual([
        "r-btn",
        "rvt-button",
        "rvt-button--plain r-btn-plain--success"
      ])
    })
  })

  describe("with success color", () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(RBtn, {
        propsData: {
          buttonStyle: ButtonStyle.plain,
          buttonColor: ButtonColor.danger
        }
      })
    })

    it("Should have default classes", () => {
      expect(wrapper.vm.classes).toEqual([
        "r-btn",
        "rvt-button",
        "rvt-button--plain r-btn-plain--danger"
      ])
    })
  })
})

describe("RBtn with custom size", () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(RBtn, {
      propsData: {
        buttonSize: ButtonSize.small
      }
    })
  })

  it("Should have default classes", () => {
    expect(wrapper.vm.classes).toEqual([
      "r-btn",
      "rvt-button",
      "rvt-button--small",
      "rvt-button--primary"
    ])
  })
})

describe("RBtnExample when clicked should emit click event", () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(RBtnExample, {})
  })

  it("Should emit click event", () => {
    wrapper.find("#customId").trigger("click")
    expect(wrapper.emitted("click")).toBeTruthy()
  })
})
