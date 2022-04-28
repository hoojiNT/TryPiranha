Vue.component('rawhtml-block', {
  props: ['uid', 'model'],
  template: '<div class="block-body"><textarea :id="uid" rows="8" v-model="model.body.value"></textarea></div>'
});

Vue.component('covid-status', {
  props: ['uid', 'model'],
  created: function () {
    this.getInfo()
  },
  data() {
    return {
      status: {}
    }
  },
  methods: {
    getInfo: function () {
      let self = this
      fetch("https://corona.lmao.ninja/v2/countries/vn").then(x => x.json()).then(x => {
        this.status = x;
        self.model.Status = x;
      })
    },
  },
  template: `<div class="block-body"> <strong>cases : {{status?.cases ?? 0}}</strong> <slot></slot> </div>`
})

Vue.component('carousel', {
  props : ['uid','model'],
  mounted: function () {
    this.getInfo()
  },
  data() {
    return undefined;
  }
})