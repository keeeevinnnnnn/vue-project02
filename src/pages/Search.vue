<template>
  <div>
    <TypeNav />
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav.vue";
export default {
  name: "Search",
  props: ["keyword"],
  components: { TypeNav },
};
</script>

<style lang="scss" scoped></style>
