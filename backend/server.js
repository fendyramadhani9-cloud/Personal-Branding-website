const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.post("/api/contact",(req,res)=>{

const {name,email,message} = req.body

console.log("New Message:")
console.log(name,email,message)

res.json({
message:"Message sent successfully!"
})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})