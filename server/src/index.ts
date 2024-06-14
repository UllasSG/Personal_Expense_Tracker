// TiICDJVAa22HcenB
// ullassgirish

import express, { Express } from "express";
import mongoose from "mongoose"
import financialRecordRouter from "./routes/FinancialRecord";


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://ullassgirish:TiICDJVAa22HcenB@prsnlexpnstrckr.wdgfmw2.mongodb.net/"

mongoose.connect(mongoURI)
    .then(() => console.log("DB connected"))
    .catch((err) => { console.log(err) })


app.use("/financial-record",financialRecordRouter);

app.listen(port, ()=>{
    console.log("listening on - "+port)
})