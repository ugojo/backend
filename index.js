const express = require('express')

const PORT=4000
const app = express()

app.use(express.json())



app.get('/', (req, res)=>{
    res.status(200).json({"Message": 'Wellcome app deployed success'})
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})