import { Router } from "express";
import { getConnection } from "../db/connection.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    let connection = await getConnection();

    const [data] = await connection.execute('SELECT * FROM USER');
    res.json({ statusCode: 0, data });
  } catch (error) {
    console.error(error);
    res.json({ statusCode: 1, message: `${error}` });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = await req.body;
    
    res.json({ statusCode: 0, data });
  } catch (error) {
    console.error(error);
    res.json({ statusCode: 1, message: `${error}` });
  }
});

export default userRouter;
