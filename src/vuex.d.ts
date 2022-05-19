import { Store } from "vuex";

import { State } from "@/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
