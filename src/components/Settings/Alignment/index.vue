<template>
  <AlignmentWrapper
    ><div class="attribute-name">{{ attribute }} :</div>
    <div v-for="a in alignments" :key="a">
      <div :class="`row ${a}`">
        <div v-for="b in alignments" :key="b">
          <div :class="`box ${b}`" @click="updateAlignment(a, b)">
            <CircleWrapper
              class="circle"
              :isSelected="alignItems === a && justifyContent === b"
            />
          </div>
        </div>
      </div>
    </div>
  </AlignmentWrapper>
</template>

<script>
import { AlignmentWrapper, CircleWrapper } from "./style";

export default {
  data() {
    return {
      alignItems: this.selectedComponent.attributes.alignment.alignItems,
      alignments: ["flex-start", "center", "flex-end"],
      justifyContent:
        this.selectedComponent.attributes.alignment.justifyContent,
    };
  },
  components: {
    AlignmentWrapper,
    CircleWrapper,
  },
  props: {
    attribute: {
      type: String,
    },
    selectedComponent: {
      type: Object,
    },
  },
  methods: {
    updateAlignment(a, b) {
      const newAttr = {
        [this.attribute]: { alignItems: a, justifyContent: b },
      };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
};
</script>
