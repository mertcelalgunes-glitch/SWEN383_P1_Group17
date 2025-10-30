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

class LocalRepository extends Repository {
  save(entity) {}
  findById(id) {}
}

// --- Helper / Strategy Class ---
class ShoppingListGenerator {
  generate(mealPlan) {}
}

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
