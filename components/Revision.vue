<!--
  The deck's revision: the commit it was served or built from, and that
  commit's date. Both are filled in by vite.config.ts.
-->
<script setup>
const rev = __DECK_REV__
const date = __DECK_DATE__
</script>

<template>
  <span>rev {{ rev }} · {{ date }}</span>
</template>
