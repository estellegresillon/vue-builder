<template>
  <TopBarWrapper>
    <div class="routes">
      <Item>
        <router-link to="/">
          <strong>Page Builder</strong>
          <span class="demo-tag">demo</span>
        </router-link>
      </Item>
      <Item @click="saveJson">
        <span class="mobile-link"> Mobile </span> /
        <router-link class="desktop-link" to="/prod">
          Live preview
        </router-link>
      </Item>
    </div>
    <div class="actions">
      <Item class="action-button" @click="showModal"
        ><IconSettings /> Customize
      </Item>
      <ProjectModal v-if="isModalOpened" :onClose="closeModal" />
      <Item class="action-button" @click="saveJson"><IconSave /> Save </Item>
      <Item class="action-button" @click="resetJson"
        ><IconClean /> Start over
      </Item>
    </div>
  </TopBarWrapper>
</template>

<script>
import {
  IconClean,
  IconSave,
  IconSettings,
  ProjectModal,
} from "@/components/common";
import { saveDocumentInLocalStorage } from "@/utils/localStorage";

import { Item, TopBarWrapper } from "./style";

export default {
  components: {
    IconClean,
    IconSave,
    IconSettings,
    Item,
    ProjectModal,
    TopBarWrapper,
  },
  data() {
    return {
      isModalOpened: false,
    };
  },
  computed: {
    json() {
      return this.$store.getters.getJson;
    },
  },
  methods: {
    closeModal() {
      this.isModalOpened = false;
    },
    resetJson() {
      this.$store.dispatch("resetJson");
    },
    saveJson() {
      saveDocumentInLocalStorage(this.json);
    },
    showModal() {
      this.isModalOpened = true;
    },
  },
};
</script>
