const express = require('express')
const cors = require('cors')
const app = express();
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')
const port = process.env.port || 8529 ;


// middlewares ========
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5174'],
    credentials: true
}))
app.use(cookieParser());

// registation ===========

app.get('/', (req, res)=>{
    res.send('Successfully Connected')
})

const secreat = 'lkshdfhoshlhsdf52'
app.post('/signup', async (req,res)=>{
    const user = await req.body;
    try{

        var token = jwt.sign({ ...user }, secreat, { expiresIn: '5m' })
        console.log(token);
        res.cookie('test-cookie', token, { httpOnly: true });
        return res.json({ message: "login success !!!", token: token })

    }
    catch(error){


        console.log(error);
    }

})

// app.get('/user',(req,res=>{

// }))

app.get('/user', async(req,res)=>{

    const cookies = await req.cookies?.['test-cookie'];
    res.json(cookies)

    console.log(cookies);
})

app.listen(port , ()=>{
    console.log(`server is running ${port}`);
})