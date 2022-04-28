/*global
  piranha
*/

Vue.component('covid-status', {
  props: ['uid', 'model'],
  template: ' <div class="block-body"> <strong>Error!</strong> <slot></slot> </div> '
})