<template>
  <AlignmentWrapper
    ><div class="attribute-name">{{ attribute }} :</div>
    <div v-for="align in alignments" :key="align">
      <div :class="`row ${align}`">
        <div v-for="justify in alignments" :key="justify">
          <div
            :class="`box ${justify}`"
            @click="updateAlignment(align, justify)"
          >
            <CircleWrapper
              class="circle"
              :isSelected="alignItems === align && justifyContent === justify"
            />
          </div>
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
      alignItems: this.selectedComponent.attributes.alignment?.alignItems,
      alignments: ["flex-start", "center", "flex-end"],
      justifyContent:
        this.selectedComponent.attributes.alignment?.justifyContent,
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
  methods: {
    updateAlignment(alignItems: string, justifyContent: string) {
      const newAttr = {
        [this.attribute]: { alignItems, justifyContent },
      };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
});
</script>
