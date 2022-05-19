<template>
  <HeroWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
    :style="{
      backgroundImage: 'url(' + require('@/assets/builder/22.jpg') + ')',
    }"
  >
    <div class="content">
      <h1>{{ section.attributes.title }}</h1>
      <p>{{ section.attributes.subtitle }}</p>
      <Button :color="section.attributes.buttonColor" text="Discover" />
    </div>
  </HeroWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Button } from "@/components/common";
import { ISection } from "@/types";

import { HeroWrapper } from "./style";

export default defineComponent({
  components: {
    Button,
    HeroWrapper,
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
