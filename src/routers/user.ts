
import { Router } from 'express';

const router = Router();

router.use("/users", (_, res) => res.status(200).json({message: "users"}));

export default router;