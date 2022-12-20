import User from "../../entities/User"
import database from "../../database"

export default function(): Array<User>{
  if(!database.length) throw new Error("No users available!")

  return database
}