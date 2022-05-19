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
