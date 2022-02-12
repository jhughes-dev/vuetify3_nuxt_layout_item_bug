// plugins/vuetify.ts
import {defineNuxtPlugin} from "#app";
import {createVuetify} from "vuetify";
// Import everything
// import * as components from 'vuetify/components'
import * as vuetifyComponents from "vuetify/components";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components: vuetifyComponents,
    });
    nuxtApp.vueApp.use(vuetify);
});
