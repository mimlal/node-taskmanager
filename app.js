const express = require('express')
const app = express();

const tasks = require('./Routes/task')
const connectDB=require('./db/connect');
require('dotenv').config();

const notFound =require('./middleware/notfound')
const errorHandlerMiddleware=require('./middleware/error')
// middleware 
app.use(express.static('./public'))
app.use(express.json())

// routes 
// app.get('/',(req,res)=>{
//     res.send('app is running')
// })

app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start=async()=>{
    try{
       await connectDB(process.env.MONGO_URI)
       app.listen(port,console.log(`server is running ${port}`))
    }catch(error){
        console.log(error)
    }
}
start()