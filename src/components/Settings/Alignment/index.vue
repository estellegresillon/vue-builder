<template>
  <AlignmentWrapper
    ><div class="attribute-name">{{ attribute }} :</div>
    <div v-for="justify in alignments" :class="`row ${justify}`" :key="justify">
      <div v-for="align in alignments" :key="align">
        <div :class="`box ${align}`" @click="updateAlignment(align, justify)">
          <CircleWrapper
            class="circle"
            :isSelected="
              componentAlignments.alignItems === align &&
              componentAlignments.justifyContent === justify
            "
          />
        </div>
      </div>
    </div>
  </AlignmentWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ISection } from "@/types";

import { AlignmentWrapper, CircleWrapper } from "./style";

export default defineComponent({
  data() {
    return {
      alignments: ["flex-start", "center", "flex-end"],
    };
  },
  components: {
    AlignmentWrapper,
    CircleWrapper,
  },
  props: {
    attribute: {
      required: true,
      type: String,
    },
    selectedComponent: {
      required: true,
      type: Object as PropType<ISection>,
    },
  },
  computed: {
    componentAlignments() {
      return {
        alignItems: this.selectedComponent.attributes.alignment?.alignItems,
        justifyContent:
          this.selectedComponent.attributes.alignment?.justifyContent,
      };
    },
  },
  methods: {
    updateAlignment(alignItems: string, justifyContent: string) {
      const newAttr = {
        alignment: { alignItems, justifyContent },
      };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
});
</script>
