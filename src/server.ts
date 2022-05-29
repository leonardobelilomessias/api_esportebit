import express from 'express'; 

const app = express()

app.get("/", (request, response) => {
  return response.json({message:"thats ok! onde more"})
})

app.listen(3333, () => {
  console.log('Server running')
})
