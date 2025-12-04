// ===============================================
// SKELETON CODE – Cooking Plan / Meal Planner App
// ===============================================

// --- Domain Classes ---
class Ingredient {
  constructor(name, amount) {}
}

class Recipe {
  constructor(id, title, ingredients = [], tags = [], photo = '') {}
  rate(rating) {}
  delete() {}
}

class PlanEntry {
  constructor(day, recipeId) {}
  setRecipe(recipeId) {}
}

class MealPlan {
  constructor(id, entries = []) {}
  addEntry(entry) {}
  getRecipeIds() {}
}

// --- Repository Layer ---
class Repository {
  save(entity) {}
  findById(id) {}
}
// Allows us to add different types of repositories maybe in future such as database repository or cloud repository
class LocalRepository extends Repository {
  save(entity) {}
  findById(id) {}
}

// --- Helper / Strategy Class  ---
// Needed if users wants to add different types of lists such as pantry list, shopping list or vegan shopping list
class ShoppingListGenerator {
  generate(mealPlan) {}
}
// What we need is define a factory that will outline how to make a repository, then have specific implementations for each type of repository
// classes would ask the factory for a repository rather than instantiating one directly
// --- Service Layer ---
class MealPlannerService {
  addRecipe(user, recipe) {}
  addMealPlan(user, plan) {}
  shareMealPlan(plan, owner, targetUser) {}
  generateShoppingList(mealPlan) {}
}

// --- User Class ---
class User {
  constructor(id, name) {}
  addRecipe(recipe, mealPlannerService) {}
  addMealPlan(plan, mealPlannerService) {}
  shareMealPlan(plan, otherUser, mealPlannerService) {}
}

// --- Example Setup ---
const recipeRepo = new LocalRepository();
const mealPlanRepo = new LocalRepository();
const service = new MealPlannerService(recipeRepo, mealPlanRepo);
const user = new User('u1', 'Mert');
const recipe = new Recipe('r1', 'Pasta');
const plan = new MealPlan('m1', []);
