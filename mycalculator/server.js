import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';


const app = express()

const port = 7000


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})




app.use(bodyParser.urlencoded({extended:true}))


app.use(express.json());

app.get('/add', (req,res)=>{
    const {a,b} = req.query
    const number = parseNumber(a,b)
    if (!number) {
        return res.status(404).json({error: "invalid numbers provided"})
    }
    const {numA, numB} = number
    const result = numA + numB
    res.json({result})
})






app.post('/', (req,res) => {

    console.log("Form Data Received", req.body);
    var num1 = Number(req.body.dig1)
    var num2 = Number(req.body.dig2)




    const add = num1 + num2
    const product = num1 * num2
    const subtraction = num1 - num2
    const division = num1 / num2



    res.send(`the result of adding is ${add}<br> the result of multiplying is ${product}<br>  the result of subtracting is ${subtraction}<br>  the result of dividing is ${division} `)

    console.log(req.body)
});





app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})

