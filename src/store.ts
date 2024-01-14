import { createStore } from "state-pool";

const store = createStore();
store.setState("selectedDocuments", []);
export default store;
