import express from 'express'

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send('Hello from TypeScript backend!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
