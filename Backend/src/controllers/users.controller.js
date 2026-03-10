const { model } = require('mongoose')
const userModel= require('../models/User.model')

async function AllUsers(req,res){
   const role = req.user.role
   
   if(role!=='admin'){
    return res.status(400).json({
        message:'Token Exprired'
    })
   }

   const allUsers = await userModel.find({role:"user"})
   res.status(200).json({
    message:"All users fetched successfully",
    allUsers
   })
   
}

async function getMe(req,res){
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message:'User fetched successfully!',
        user
    })
}

async function addFavorite(req,res){
    try{
        const { movieId, movieData } = req.body;
        const userId = req.user.id;
        
        const user = await userModel.findById(userId);
        
        // Check if movie already in favorites
        const isFavorited = user.favorites.some(fav => fav.id === movieId);
        
        if(isFavorited){
            return res.status(400).json({
                message: 'Movie already in favorites'
            })
        }
        
        user.favorites.push(movieData);
        await user.save();
        
        res.status(200).json({
            message: 'Movie added to favorites',
            favorites: user.favorites
        })
    }catch(err){
        res.status(500).json({
            message: 'Error adding to favorites',
            error: err.message
        })
    }
}

async function removeFavorite(req,res){
    try{
        const { movieId } = req.body;
        const userId = req.user.id;
        
        const user = await userModel.findById(userId);
        user.favorites = user.favorites.filter(fav => fav.id !== movieId);
        await user.save();
        
        res.status(200).json({
            message: 'Movie removed from favorites',
            favorites: user.favorites
        })
    }catch(err){
        res.status(500).json({
            message: 'Error removing from favorites',
            error: err.message
        })
    }
}

async function getFavorites(req,res){
    try{
        const user = await userModel.findById(req.user.id);
        res.status(200).json({
            message: 'Favorites fetched successfully',
            favorites: user.favorites
        })
    }catch(err){
        res.status(500).json({
            message: 'Error fetching favorites',
            error: err.message
        })
    }
}

module.exports = {
    AllUsers,
    getMe,
    addFavorite,
    removeFavorite,
    getFavorites
}