<template>
  <div>
    <h1>params參數: {{ $route.params.keyword }} props參數: {{ keyword }}</h1>
    <h1>query參數: {{ $route.query }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword"],
};
</script>

<style lang="scss" scoped></style>
