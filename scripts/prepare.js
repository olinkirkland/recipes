import fs from 'fs';

/**
 * This script creates an array of objects for each
 * markdown file in the recipes folder, and writes it to a JSON file.
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
    const slug = recipeFile.replace('.md', '');
    const titleRegexMatches = content.match(/^#\s(.+)/m);
    const title = titleRegexMatches ? titleRegexMatches[1] : null;
    recipes.push({
      slug,
      title,
      category: recipeCategory,
      content
    });
  });
});

// Write the recipes array to a JSON file
fs.writeFileSync('./src/assets/recipes.json', JSON.stringify(recipes));
