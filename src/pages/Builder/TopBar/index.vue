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
        <span class="mobile-link" @click.stop="showMobilePreview">
          Mobile
        </span>
        /
        <router-link class="desktop-link" to="/prod">
          Live preview
        </router-link>
      </Item>
    </div>
    <div class="actions">
      <Item class="action-button" @click="showProjectModal"
        ><IconSettings /> Customize
      </Item>
      <ProjectModal v-if="isProjectModalOpened" :onClose="closeProjectModal" />
      <Item class="action-button" @click="saveJson"><IconSave /> Save </Item>
      <Item class="action-button" @click="resetJson"
        ><IconClean /> Start over
      </Item>
    </div>
  </TopBarWrapper>
  <MobilePreview v-if="isMobilePreviewOpened" :onClose="hideMobilePreview" />
</template>

<script>
import {
  IconClean,
  IconSave,
  IconSettings,
  MobilePreview,
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
    MobilePreview,
    ProjectModal,
    TopBarWrapper,
  },
  data() {
    return {
      isProjectModalOpened: false,
      isMobilePreviewOpened: false,
    };
  },
  computed: {
    json() {
      return this.$store.getters.getJson;
    },
  },
  methods: {
    closeProjectModal() {
      this.isProjectModalOpened = false;
    },
    resetJson() {
      this.$store.dispatch("resetJson");
    },
    saveJson() {
      saveDocumentInLocalStorage(this.json);
    },
    showMobilePreview() {
      this.isMobilePreviewOpened = true;
    },
    showProjectModal() {
      this.isProjectModalOpened = true;
    },
    hideMobilePreview() {
      this.isMobilePreviewOpened = false;
    },
  },
};
</script>
