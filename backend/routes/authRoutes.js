import express from "express"

const router = express.Router()

import { getMe, signup, login, logout } from "../controllers/authController.js"
import protectRoute from '../middlewares/protectRoute.js'

router.get("/me", protectRoute, getMe)

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

export default router