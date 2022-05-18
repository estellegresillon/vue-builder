<template>
  <PartnersWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <div
      v-for="partner in partnersArray"
      :key="partner"
      class="image-wrapper"
      :style="{
        width: `calc(100% / ${section.attributes.itemCount})`,
      }"
    >
      <img :src="require(`@/assets/builder/${partner}.png`)" :alt="partner" />
    </div>
  </PartnersWrapper>
</template>

<script>
import { PartnersWrapper } from "./style";

export default {
  components: {
    PartnersWrapper,
  },
  props: {
    isInBuilder: {
      default: false,
      type: Boolean,
    },
    section: {
      type: Object,
    },
  },
  computed: {
    partnersArray() {
      return Array.from(
        { length: this.section.attributes?.itemCount },
        (_, i) => (i + 100).toString()
      );
    },
  },
};
</script>
