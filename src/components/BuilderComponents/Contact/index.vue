<template>
  <ContactWrapper
    :id="section.id"
    :isInBuilder="isInBuilder"
    :section="section"
  >
    <div class="photo-wrapper">
      <img src="@/assets/builder/62.jpeg" alt="owner" />
    </div>
    <TextWrapper :section="section">
      <div class="contact-title">{{ section.attributes.title }}</div>
      <div class="contact-content">
        {{ section.attributes.description }}
      </div>
      <div class="contact-links">
        <a
          :href="`mailto:${section.attributes.mail}`"
          rel="noopener noreferrer"
          target="_blank"
          v-if="section.attributes.mail"
          :style="{
            color: section.attributes.textColor,
          }"
        >
          <IconMail />
        </a>
        <a
          :href="section.attributes.linkedIn"
          rel="noopener noreferrer"
          target="_blank"
          v-if="section.attributes.linkedIn"
          :style="{
            color: section.attributes.textColor,
          }"
        >
          <IconLinkedIn />
        </a>
        <a
          :href="section.attributes.instagram"
          rel="noopener noreferrer"
          target="_blank"
          v-if="section.attributes.instagram"
          :style="{
            color: section.attributes.textColor,
          }"
        >
          <IconInstagram />
        </a>
        <a
          :href="section.attributes.dribbble"
          rel="noopener noreferrer"
          target="_blank"
          v-if="section.attributes.dribbble"
          :style="{
            color: section.attributes.textColor,
          }"
        >
          <IconDribbble />
        </a>
        <a
          :href="section.attributes.other"
          rel="noopener noreferrer"
          target="_blank"
          v-if="section.attributes.other"
          :style="{
            color: section.attributes.textColor,
          }"
        >
          <IconWorld />
        </a>
      </div>
    </TextWrapper>
  </ContactWrapper>
</template>

<script>
import {
  IconDribbble,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconWorld,
} from "@/components/common";

import { ContactWrapper, TextWrapper } from "./style.js";

export default {
  components: {
    ContactWrapper,
    IconDribbble,
    IconInstagram,
    IconLinkedIn,
    IconMail,
    IconWorld,
    TextWrapper,
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
