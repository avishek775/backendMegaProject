import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
const healthCheck = async (req, res) =>{
    try {
       return res.status(200).json(
            new ApiResponse(200, {message: "Server is running"})
        )
    } catch (error) {
        
       return res.status(500).json(
            new ApiError(500, "Internal server error")
        )
    }
};

export {healthCheck};