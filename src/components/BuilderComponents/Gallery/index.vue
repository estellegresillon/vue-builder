<template>
  <GalleryWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <img
      v-for="image in imagesArray"
      :key="image"
      :class="`img-${section.attributes.columns}-col`"
      :src="require(`@/assets/builder/${image}.jpg`)"
      :alt="image"
    />
  </GalleryWrapper>
</template>

<script>
import { GalleryWrapper } from "./style.js";

export default {
  components: {
    GalleryWrapper,
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
    imagesArray() {
      return Array.from(
        { length: this.section.attributes?.itemCount },
        (_, i) => (i + 1).toString()
      );
    },
  },
};
</script>
