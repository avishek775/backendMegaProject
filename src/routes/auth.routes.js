import {Router} from "express";
import {registerUser} from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterationValidator } from "../validators/index.js";

const router = Router()
router.route("/rgister").post(userRegisterationValidator(), validate, registerUser)
export default router;
