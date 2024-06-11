import express from 'express'
const router = express.Router()

import protectRoute from '../middlewares/protectRoute.js'
import { getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, createPost, likeUnlikePost, commentOnPost, deletePost } from '../controllers/postController.js'

router.get("/all", protectRoute, getAllPosts)
router.get("/following", protectRoute, getFollowingPosts)
router.get("/likes/:id", protectRoute, getLikedPosts)
router.get("/user/:username", protectRoute, getUserPosts)
router.post("/create", protectRoute, createPost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/comment/:id", protectRoute, commentOnPost)
router.delete("/:id", protectRoute, deletePost)

export default router