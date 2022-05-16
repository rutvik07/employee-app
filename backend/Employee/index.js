import express from 'express';
import router from './routes/employee-route';
import mongoose from 'mongoose';
import cors from 'cors';


var app = express();
app.get('/myname',function(req, res){
        res.send("Rutvik");
})
app.use(express.json());

app.use(cors());    
app.use(express.static(__dirname));
app.use('/user',router);

mongoose.connect('mongodb://localhost:27017/employeeDB')
.then(()=>{
    console.log('MongoDB Started :)');
})

.catch(()=>{
    console.log('mongodb connection failed');
})


app.listen(9000,function(){
    console.log('Server Started')
})

