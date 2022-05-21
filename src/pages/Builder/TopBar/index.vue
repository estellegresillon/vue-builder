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
        <span class="mobile-link" @click="showMobilePreview"> Mobile </span>
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
      <Item class="action-button" @click="useTemplate"
        ><IconMagic /> Use a template
      </Item>
    </div>
  </TopBarWrapper>
  <Notification v-if="isSaved" text="Successfully saved !" />
  <MobilePreview v-if="isMobilePreviewOpened" :onClose="hideMobilePreview" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  IconClean,
  IconMagic,
  IconSave,
  IconSettings,
  MobilePreview,
  Notification,
  ProjectModal,
} from "@/components/common";
import { ISection } from "@/types";
import { saveDocumentInLocalStorage } from "@/utils/localStorage";
import template from "@/utils/predefinedJson";

import { Item, TopBarWrapper } from "./style";

export default defineComponent({
  components: {
    IconClean,
    IconMagic,
    IconSave,
    IconSettings,
    Item,
    MobilePreview,
    Notification,
    ProjectModal,
    TopBarWrapper,
  },
  data() {
    return {
      isMobilePreviewOpened: false,
      isProjectModalOpened: false,
      isSaved: false,
      timer: null as any,
    };
  },
  computed: {
    json(): ISection[] {
      return this.$store.getters.getJson;
    },
  },
  methods: {
    closeProjectModal() {
      this.isProjectModalOpened = false;
    },
    hideMobilePreview() {
      this.isMobilePreviewOpened = false;
    },
    resetJson() {
      this.$store.dispatch("resetJson");
    },
    saveJson() {
      this.startTimer();
      saveDocumentInLocalStorage(this.json);
    },
    showMobilePreview() {
      this.isMobilePreviewOpened = true;
    },
    showProjectModal() {
      this.isProjectModalOpened = true;
    },
    startTimer() {
      if (this.isSaved === true) {
        return;
      }

      this.isSaved = true;

      this.timer = setTimeout(() => {
        this.isSaved = false;
      }, 4000);
    },
    useTemplate() {
      this.$store.dispatch("updateJson", template);
    },
  },
  unmounted() {
    clearTimeout(this.timer);
  },
});
</script>
