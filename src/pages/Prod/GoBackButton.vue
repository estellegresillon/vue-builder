<template>
  <router-link to="/">
    <Wrapper><icon-back /> Go back to builder</Wrapper>
  </router-link>
</template>

<script>
import styled from "vue3-styled-components";

const Wrapper = styled.div`
  align-items: center;
  background: #d40c0c;
  border-radius: 3px;
  bottom: 20px;
  display: flex;
  font-weight: bolder;
  padding: 20px 30px;
  position: fixed;
  right: 20px;

  svg {
    height: 12px;
    margin-right: 10px;
    width: 12px;
  }

  &:hover {
    background: #ef3535;
  }

  a & {
    color: white;
  }
`;

export default {
  components: {
    Wrapper,
  },
};
</script>
