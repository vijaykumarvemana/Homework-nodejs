import express from "express"
const authorsRouter = express.Router()

authorsRouter.post("/")
authorsRouter.get("/")
authorsRouter.get("/:authorID")
authorsRouter.put("/:authorID")
authorsRouter.delete("/:authorID")


export default authorsRouter