import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserOfSidebar } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/',protectRoute,getUserOfSidebar);



export default router;