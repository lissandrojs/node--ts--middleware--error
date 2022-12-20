import { Request, Response } from "express"
import createUserService from "../services/user/createUser.service"
import listUsersService from "../services/user/listUsers.service"

class UserController{
  createUser(req: Request, res: Response){
    const { name, age } = req.body

    try {
      const newUser = createUserService(name, age)
  
      return res.status(201).json(newUser)
      
    } catch (error) {
      if(error instanceof Error){
        return res.status(400).json({
          message: error.message
        })
      }
      return res.status(500).json({
        message: "Internal server error!"
      })
    }
  }

  listUsers(req: Request, res: Response){
    try {
      const allUsers = listUsersService()
  
      return res.status(201).json(allUsers)
      
    } catch (error) {
      if(error instanceof Error){
        return res.status(400).json({
          message: error.message
        })
      }
      return res.status(500).json({
        message: "Internal server error!"
      })
    }
  }
}

export default new UserController()