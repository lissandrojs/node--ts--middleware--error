import User from "../../entities/User"
import database from "../../database"

export default function(name:string, age: number): User {
  const doUserExists = database.find( user => user.name === name )

  if(doUserExists) throw new Error("User already exists!")
  if(age < 18) throw new Error("Only 18+ users allowed!")

  const newUser = new User(name, age)

  database.push(newUser)

  return newUser
}