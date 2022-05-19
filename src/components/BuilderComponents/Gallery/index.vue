<template>
  <GalleryWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <img
      :alt="image"
      :class="`img-${section.attributes.columns}-col`"
      :key="image"
      :src="require(`@/assets/builder/${image}.jpg`)"
      v-for="image in imagesArray"
    />
  </GalleryWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ISection } from "@/types";

import { GalleryWrapper } from "./style";

export default defineComponent({
  components: {
    GalleryWrapper,
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
    imagesArray() {
      if (!this.section?.attributes.itemCount) {
        return null;
      }

      const arrayLength = parseInt(this.section.attributes.itemCount);
      return Array.from({ length: arrayLength }, (_, i) => (i + 1).toString());
    },
  },
});
</script>
