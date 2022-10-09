import { Request, Response } from "express"
import { RegisterValidation } from "../validation/register.validation"
interface RequestBody {
    fistName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export const Register = (req: Request, res: Response) => {

    const body: RequestBody = req.body;
    const { error } = RegisterValidation.validate(body)
    if (error)
        return res.status(400).json({ message: error.message })

    if (body.password !== body.confirmPassword)
        return res.status(401).json({ message: "Confirm Password not match" })
        
    res.send(req.body)

} 