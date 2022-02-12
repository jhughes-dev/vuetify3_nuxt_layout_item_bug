# Reprodction for Nuxt/Vuetify SSR Issue
```
npm install
npm run dev
```
You'll see an error:

`[worker] Layout item "layout-item-0" is missing from layout prop`

If you comment out either the `<v-app-bar />` or `<v-navigation-drawer />` component in `./App.vue`, this will work as expected.
