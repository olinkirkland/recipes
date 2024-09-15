import fs from 'fs';

/**
 * This script creates an array of objects for each
 * markdown file in the recipes folder.
 */

const recipesFolderPath = './recipes';
const recipes = [];

// Each subfolder of the recipes folder is a recipe category
const recipeCategories = fs.readdirSync(recipesFolderPath);

recipeCategories.forEach((recipeCategory) => {
  // Read each markdown file in the category folder
  // Store it in the recipes array
  const categoryPath = `${recipesFolderPath}/${recipeCategory}`;
  const recipeFiles = fs.readdirSync(categoryPath);
  recipeFiles.forEach((recipeFile) => {
    const recipePath = `${categoryPath}/${recipeFile}`;
    const content = fs.readFileSync(recipePath, 'utf8');
    recipes.push({
      slug: recipeFile.replace('.md', ''),
      category: recipeCategory,
      content
    });
  });
});

console.log(recipes);

// Write the recipes array to a JSON file

fs.writeFileSync('./src/assets/recipes.json', JSON.stringify(recipes));