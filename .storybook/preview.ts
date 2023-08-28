import "../node_modules/rivet-core/css/rivet.min.css"
import "../node_modules/rivet-core/js/rivet.min.js"
// import "../src/assets/rasd-vue-library.css"
import type { Preview } from '@storybook/vue3'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
