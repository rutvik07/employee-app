import mongoose from 'mongoose';

const {Schema}  = mongoose;

const schema = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    dob:{
        type:String
    },
    address:{
        type:String
    },
    photo:{
        type:String
    }
   
   
});

const Employees = mongoose.model('Employees',schema);
export default Employees;
