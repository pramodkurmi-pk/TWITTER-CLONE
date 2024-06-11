import express from 'express'
const router = express.Router() 

import protectRoute from '../middlewares/protectRoute.js'
import { getUserProfile, getSuggestedUsers, followUnfollowUser, updateUser } from '../controllers/userController.js'

router.get("/profile/:username", protectRoute, getUserProfile)
router.get("/suggested", protectRoute, getSuggestedUsers)
router.post("/follow/:id", protectRoute, followUnfollowUser)
router.post("/update", protectRoute, updateUser)

export default router