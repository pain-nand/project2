import UserModel from "../models/Auth.model.js"
import bcrypt from "bcrypt"
export const signupController = async (req, res) => {
    try {
        const { userName, password, email } = req.body
        console.log(req.body)
        const emailExists = await UserModel.findOne({email})
       
        if (emailExists) {
            return res.status(401).json({ error: "email already exists" })
        }
        if(password.length < 6) {
            return res.status(401).json({error: "password minmum length is 6 characters"})
        }
        const salt = bcrypt.genSaltSync(10)
        const hassedPassword = bcrypt.hashSync(password, salt)
        const newUser = await UserModel.create({
            userName,
            password: hassedPassword,
            email
        })

        return res.status(200).json({ message: "account created successfully", user: newUser })
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Internal server error" })
    }

}