import express from 'express'
const router = express.Router()

import protectRoute from '../middlewares/protectRoute.js'
import { getNotifications, deleteNotifications, deleteNotification } from '../controllers/notificationController.js'

router.get("/", protectRoute, getNotifications)
router.delete("/", protectRoute, deleteNotifications)
router.delete("/:id", protectRoute, deleteNotification)

export default router