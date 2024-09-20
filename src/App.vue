<template>
  <h1>Recipe Collection</h1>
  <div class="tile-grid">
    <RecipeTile
      v-for="recipe in recipes"
      :key="`${recipe.category}/${recipe.slug}`"
      :recipe="recipe"
      @click="selectedRecipe = recipe"
    />
  </div>
  <RecipePanel v-if="selectedRecipe" :recipe="selectedRecipe" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import recipesJSON from './assets/recipes.json';
import RecipeTile from './components/RecipeTile.vue';

export type Recipe = {
  title: string;
  slug: string;
  category: string;
  content: string;
};

const selectedRecipe = ref<Recipe | null>(null);

const recipes = computed(() => {
  return recipesJSON as Recipe[];
});
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/styles.scss';

h1 {
  text-align: center;
  margin: 2rem;
}

.tile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 2rem 1rem;
  margin: 2rem;
}
</style>
