import { createApp } from "vue";
import App from "./App.vue";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import router from "./router";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);
app.use(router);

app.mount("#app");
