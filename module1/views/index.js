import { createApp } from "vue";
import App from "../components/App.vue";

const app = createApp(App);

window.renderModule1 = (containerId) => {
    app.mount(`#${containerId}`);
}