const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipeImage: {
        data: Buffer,
        contentType: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    ingredients: [
        {
            quantity: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            note: {
                type: String,
                required: false
            }
        }
    ],
    tags: [
        {
            tagName: {
                type: String,
                required: false
            }
        }
    ],
    steps: [
        {
            step: {
                type: String,
                required: false
            },
            note: {
                type: String,
                required: false
            }
        }
    ],
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);