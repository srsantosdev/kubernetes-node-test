import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (request, response) => {
  return response.json({ hello: 'world' })
})

app.listen(3333, () => {
  console.log("Server running on port 3333")
})