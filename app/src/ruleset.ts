import { mount } from "svelte";
import App from "./Ruleset.svelte";

const app = mount(App, {
  target: document.body,
});

export default app;
