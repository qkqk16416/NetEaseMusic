import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

/* import './plugins/my-element' */

import './assets/css/global.css'
import './assets/css/my-element.css'
import './assets/css/btn.css'
import './assets/css/sub-commen.css'

Vue.config.productionTip = false

/* 歌曲时长的过滤器 */
Vue.filter('timeFormat', function (time) {
  let minutes = parseInt(time / 60); // 获取时长分钟
  let seconds = parseInt(time % 60); // 获取时长秒数
  seconds = seconds < 10 ? '0' + seconds : seconds // 秒
  minutes = minutes < 10 ? '0' + minutes : minutes
  return minutes + ':' + seconds
})

/* 时间的过滤器 */
Vue.filter('dateFormat', function (time) {
  const t = new Date(time)
  let year = t.getFullYear()
  let mouth = t.getMonth() + 1
  let day = t.getDay()
  mouth = mouth < 10 ? '0' + mouth : mouth
  day = day < 10 ? '0' + day : day
  return year + '-' + mouth + '-' + day
})

Vue.filter('countFormat', function (count) {
  if (count < 10000) return count
  else return Math.floor(count / 10000) + '万'
})
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      this.$store.commit('setBannerHeight', 100)
    } else {
      //Pc端进入不需要其他操作
    }
  }
}).$mount('#app')