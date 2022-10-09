import { Router, Request, Response } from "express"
import { Register } from "./controllers/auth.controller";

let router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("hello world")
})

router.post("/register", Register)


export default router;