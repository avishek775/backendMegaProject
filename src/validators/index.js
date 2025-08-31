import {body} from "express-validator"


const userRegisterationValidator = () => {
    return [
        body('username')
        .trim()
        .notEmpty().withMessage("userame is required")
        .isLength({min:3}).withMessage("username must be at least 3 char")
        .isLength({max:13}).withMessage("username must be 13 char"),


        body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage("Email is invalid"),


        body('password')
        .trim()
        .isLength({min:6}).withMessage("Password must be at least 6 char")
    ]
}


const userLoginValidator=()=>{
    return [
        body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email is not valid"),


        body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({min:6}).withMessage("Password must be at least 6 character")
    ]
}








export {userRegisterationValidator, userLoginValidator};