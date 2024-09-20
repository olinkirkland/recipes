<template>
  <div class="layout">
    <h1 class="app-heading">Recipes</h1>
    <section>
      <div class="tile-grid">
        <RecipeTile
          v-for="recipe in recipes"
          :class="{ selected: selectedRecipe?.slug === recipe.slug }"
          :key="`${recipe.category}/${recipe.slug}`"
          :recipe="recipe"
          @click="selectedRecipe = recipe"
        />
      </div>
      <RecipePanel v-if="selectedRecipe" :recipe="selectedRecipe" />
    </section>
    <button class="close" v-if="selectedRecipe" @click="selectedRecipe = null">
      Close
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import recipesJSON from './assets/recipes.json';
import RecipeTile from './components/RecipeTile.vue';
import RecipePanel from './components/RecipePanel.vue';

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
@import './assets/scss/markdown.scss';

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;

  section {
    border-top: 2px solid black;
    padding-top: 2rem;
    flex: 1;
    overflow: auto;
  }
}

h1.app-heading {
  text-align: center;
  margin: 2.4rem;
}

.tile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 2rem 1rem;
  margin: 2rem;
}

button.close {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
}
</style>
