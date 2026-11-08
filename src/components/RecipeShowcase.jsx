import React, { useState } from 'react';
import { ChefHat, Clock, Users, ChevronRight, X, Sparkles, Utensils } from 'lucide-react';
import { recipesList } from '../data/recipesData';

export default function RecipeShowcase() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const featuredRecipes = recipesList.slice(0, 6);

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full mb-1">
            <ChefHat className="w-3.5 h-3.5" />
            Culinary Test Kitchen & Formulations
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            Commercial Culinary Applications & Recipes
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            Authentic culinary applications showcasing the flavor profiles, yield consistency, and plate appeal of Pacific Grain & Foods dry beans, heirloom grains, and specialty spices.
          </p>
        </div>

        <div className="text-xs text-gray-500">
          Showing 6 of {recipesList.length} Tested Recipes
        </div>
      </div>

      {/* Grid of recipe cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="group bg-white rounded-2xl border border-gray-200 hover:border-pgf-burgundy/40 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-700">
                <span className="flex items-center gap-1 font-semibold text-pgf-burgundy">
                  <Utensils className="w-3.5 h-3.5" />
                  PGF Kitchen Formulation
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {recipe.serves}
                </span>
              </div>

              <h4 className="text-lg font-serif font-bold text-gray-900 group-hover:text-pgf-burgundy transition-colors leading-snug">
                {recipe.name}
              </h4>

              <div className="text-xs text-gray-500">
                <strong>Ingredients count:</strong> {recipe.ingredients.length} items
              </div>

              <div className="text-xs text-gray-600 line-clamp-3 bg-[#FAF8F5] p-2.5 rounded-lg border border-gray-100">
                {recipe.directions ? recipe.directions.split('\n')[0] : 'Tested commercial recipe with Pacific Grain & Foods whole commodities.'}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-pgf-burgundy group-hover:text-pgf-burgundy-900">
              <span>View Ingredients & Directions</span>
              <ChevronRight className="w-4 h-4 text-pgf-gold group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed recipe */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 sm:p-8 space-y-6 animate-fadeIn relative">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pgf-burgundy/10 text-pgf-burgundy mb-2">
                PGF Test Kitchen Formulation
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                {selectedRecipe.name}
              </h3>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1 font-semibold text-gray-700">
                  <Users className="w-3.5 h-3.5" /> Yield: {selectedRecipe.serves}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Tested Commercial Grade
                </span>
              </div>
            </div>

            {/* Ingredients */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-pgf-burgundy" />
                Ingredients List
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 bg-[#FAF8F5] p-4 rounded-xl border border-gray-200">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pgf-gold shrink-0 mt-1.5"></span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions */}
            {selectedRecipe.directions && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-pgf-burgundy" />
                  Preparation & Culinary Directions
                </h4>
                <div className="text-xs sm:text-sm text-gray-700 whitespace-pre-line leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
                  {selectedRecipe.directions}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="px-6 py-2.5 bg-pgf-burgundy text-white font-bold rounded-xl text-xs hover:bg-pgf-burgundy-800 transition-colors"
              >
                Close Formulation View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

