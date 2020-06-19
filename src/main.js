// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
require('typeface-quantico');
require('typeface-open-sans');

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

   // overwrite the scrollBehavior function with custom one
   router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return  savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    return {x: 0, y: 0}
  }
}
