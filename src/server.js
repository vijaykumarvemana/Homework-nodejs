import express from "express"
import authorsRouter from "./services/authors/index.js"
import listEndpoints from "express-list-endpoints"
const server = express()
const port = 3001

server.use("/authors", authorsRouter)
server.use(express.json())
console.log(listEndpoints(server))
console.table(listEndpoints(server))

server.listen(port, () => {
    console.log(`hello portnumber:${port}`)
})
