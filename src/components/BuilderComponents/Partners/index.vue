<template>
  <PartnersWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <div
      v-for="partner in partnersArray"
      class="image-wrapper"
      :key="partner"
      :style="{
        width: `calc(100% / ${section.attributes.itemCount})`,
      }"
    >
      <img :alt="partner" :src="require(`@/assets/builder/${partner}.png`)" />
    </div>
  </PartnersWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ISection } from "@/types";

import { PartnersWrapper } from "./style";

export default defineComponent({
  components: {
    PartnersWrapper,
  },
  props: {
    isInBuilder: {
      default: false,
      type: Boolean,
    },
    section: {
      type: Object as PropType<ISection>,
    },
  },
  computed: {
    partnersArray() {
      if (!this.section?.attributes.itemCount) {
        return null;
      }

      const arrayLength = parseInt(this.section.attributes.itemCount);

      return Array.from({ length: arrayLength }, (_, i) =>
        (i + 100).toString()
      );
    },
  },
});
</script>
