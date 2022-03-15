import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://zlehrtxveocamywyoaqh.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZWhydHh2ZW9jYW15d3lvYXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyMzE4NzIsImV4cCI6MTk2MjgwNzg3Mn0.9o8NKvpeGUa7ecTnuhb0FgmyEeHjbFT2yP6CZqszTRU",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
