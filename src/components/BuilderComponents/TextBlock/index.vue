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

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Divider } from "@/components/common";
import { ISection } from "@/types";

import { TextBlockContent, TextBlockWrapper } from "./style";

export default defineComponent({
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
      type: Object as PropType<ISection>,
    },
  },
});
</script>
