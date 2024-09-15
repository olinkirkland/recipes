<script setup lang="ts">
defineProps<{
  recipe: {
    category: string;
    slug: string;
    content: string;
  };
}>();
</script>

<template>
  <h3>{{ recipe.category }}: {{ recipe.slug }}</h3>
  <p>{{ recipe.content }}</p>
</template>

<style scoped lang="scss"></style>
