<template>
  <SectionWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <SectionContent :section="section">
      <h3>{{ section.attributes.title }}</h3>
      <Divider :color="section.attributes.textColor" />
      <p>{{ section.attributes.description }}</p>
    </SectionContent>
    <img src="@/assets/builder/10.jpg" alt="section" />
  </SectionWrapper>
</template>

<script>
import { Divider } from "@/components/common";

import { SectionContent, SectionWrapper } from "./style.js";

export default {
  components: {
    Divider,
    SectionContent,
    SectionWrapper,
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
