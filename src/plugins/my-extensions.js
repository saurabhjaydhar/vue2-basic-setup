import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// const lightdark = localStorage.getItem('settings.lightdark') || 'light';

const options = {
  // theme: {
  //   dark:  'dark',
  // },
  // themes: {
  //   dark: {
  //     accent: '#e6de55',
  //   },
  // },
  // icons: {
  //   iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  // },
};
// export { options };

export default new Vuetify(options);
