<template>
  <div class="recipe-panel">
    <div
      class="markdown"
      v-html="parsedRecipeContent"
      @click="onClickMarkdown"
    ></div>
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

function onClickMarkdown(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
  }
}
</script>

<style lang="scss">
.recipe-panel {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: auto;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  padding: 2rem;
}

h1 {
  background-color: black;
  margin: -2rem;
  padding: 2rem;
  color: white;
}

h2 {
  margin-top: 2rem;
}

li {
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 0.4rem;
  padding-right: 1.2rem;
  border-radius: 5px;
  background-color: #f0f0f0;
  user-select: none;
  &::before {
    content: '◻️';
    font-size: 2.4rem;
    display: block;
    margin-right: 0.4rem;
  }

  &.checked::before {
    content: '✅';
  }
}
</style>
