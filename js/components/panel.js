export default {
template: `
  <div class="bg-gray-700 p-4 border border-gray-600 rounded">
    <h2 class="font-bold mb-2">{{ heading }}</h2>
    <slot></slot>
  </div>

`,


  props: {
    heading: String
  }
}
