<template>
  <div class="tile" :class="recipe.category">
    <div class="tile__content">
      <p class="tag" :class="'tag--' + recipe.category">
        {{ recipe.category }}
      </p>
      <h2 v-if="recipe.title">{{ recipe.title }}</h2>
      <h2 class="muted" v-else>{{ recipe.slug }}</h2>
    </div>
    <div class="tile__shadow"></div>
  </div>
</template>

<script setup lang="ts">
import { Recipe } from '@/App.vue';

defineProps<{
  recipe: Recipe;
}>();
</script>

<style scoped lang="scss">
.tile {
  position: relative;
}

.tile > .tile__content {
  position: relative;
  height: 100%;
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
}

.tile > .tile__shadow {
  position: absolute;
  z-index: -1;
  border-radius: 5px;
  top: 0.2rem;
  left: 0.2rem;
  width: 100%;
  height: 100%;
  background-color: black;
}

.tile.selected {
  transition: all 0.2s;

  &.foods > .tile__content {
    background-color: #65c27b;
  }
  &.drinks > .tile__content {
    background-color: #b8deff;
  }

  > .tile__content {
    top: 0.2rem;
    left: 0.2rem;
  }
}

.tile:active > .tile__content {
  top: 0.2rem;
  left: 0.2rem;
}

.tile:hover {
  h2 {
    text-decoration: underline;
  }
}

.tile .tag {
  position: absolute;
  top: -1rem;
  left: 1rem;
  transition: top 0.2s;
  z-index: 1;

  &--foods {
    background-color: #65c27b;
  }

  &--drinks {
    background-color: #b8deff;
  }
}
</style>
