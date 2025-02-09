import { mount } from "svelte";
import App from "./Rule.svelte";

const app = mount(App, {
  target: document.body,
});

export default app;
