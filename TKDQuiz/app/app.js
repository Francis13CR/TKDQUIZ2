import Vue from 'nativescript-vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-messaging'
import '@nativescript/firebase-database' // only needs to be imported 1x

// Envuelve la inicialización de Firebase en una función asíncrona autoejecutable
(async () => {
  const defaultApp = await firebase().initializeApp()
  firebase().messaging().showNotificationsWhenInForeground = true

  // Request permission for notifications
  const granted = await firebase().messaging().requestPermission();
  if (granted) {
    console.log('User granted permissions for notifications');
  }

  firebase()
  .messaging()
  .onMessage(async remoteMessage => {
    alert({
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
      okButtonText: 'OK'
    })
  })

  firebase()
  .messaging()
  .onToken((token) => {
    console.log('Token received: ', token);
  })
})()

Vue.use(RadSideDrawer)

import App from './components/App'

Vue.config.silent = !__DEV__

new Vue({
  render: h => h(App)
}).$start()