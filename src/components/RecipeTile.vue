<script setup lang="ts">
import { Recipe } from '@/App.vue';

defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <div class="tile">
    <p class="tag" :class="'tag--' + recipe.category">
      {{ recipe.category }}
    </p>
    <h2 v-if="recipe.title">{{ recipe.title }}</h2>
    <h2 class="muted" v-else>{{ recipe.slug }}</h2>
  </div>
</template>

<style scoped lang="scss">
.tile {
  position: relative;
  border-radius: 5px;
  border: 2px solid black;
  padding: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: white;
  cursor: pointer;
  user-select: none;

  top: 0;
  left: 0;
  transition: all 0.1s;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 5px;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: all 0.1s;
  }

  &:hover {
    h2 {
      text-decoration: underline;
    }
  }

  &:active {
    top: 2px;
    left: 2px;

    &::after {
      top: -2px;
      left: -2px;
    }
  }

  .tag {
    position: absolute;
    top: -1.2rem;
  }
}
</style>
