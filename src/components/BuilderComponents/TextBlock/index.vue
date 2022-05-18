<template>
  <TextBlockWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <TextBlockContent :section="section">
      <h2>{{ section.attributes.title }}</h2>
      <Divider :color="section.attributes.textColor" />
      <p>{{ section.attributes.description }}</p>
    </TextBlockContent>
  </TextBlockWrapper>
</template>

<script>
import { Divider } from "@/components/common";

import { TextBlockContent, TextBlockWrapper } from "./style.js";

export default {
  components: {
    Divider,
    TextBlockContent,
    TextBlockWrapper,
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
};
</script>
