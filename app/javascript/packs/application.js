import Vue from 'vue'
import App from '../app.vue'
import Counter from '../counter.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})

document.addEventListener('DOMContentLoaded', () => {
  const app1 = new Vue({
    render: h => h(Counter)
  }).$mount()
  document.body.appendChild(app1.$el)

  console.log(app1)
})
console.log('Hello World from Webpacker')



// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'

// Vue.use(TurbolinksAdapter)

// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
