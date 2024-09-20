<template>
  <div class="recipe-panel">
    <div class="markdown" v-html="parsedRecipeContent"></div>
  </div>
</template>

<script setup lang="ts">
import { Recipe } from '@/App.vue';
import { marked } from 'marked';
import { computed } from 'vue';

const props = defineProps<{
  recipe: Recipe;
}>();

const parsedRecipeContent = computed(() => {
  return marked.parse(props.recipe.content);
});
</script>

<style lang="scss">
.recipe-panel {
  position: absolute;
  height: 100vh;
  overflow: auto;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  padding: 2rem;
}
</style>
