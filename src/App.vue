<script setup lang="ts">
import RecipeTile from './components/RecipeTile.vue';
import recipes from './assets/recipes.json';
</script>

<template>
  <h1>Recipes</h1>
  <RecipeTile
    v-for="recipe in recipes"
    :key="`${recipe.category}/${recipe.slug}`"
    :recipe="recipe"
  />
</template>

<style scoped lang="scss"></style>
