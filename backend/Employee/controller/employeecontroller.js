import Employees from '../model/employeemodel';
import multer from 'multer';

export const test = async (req,res) => {
    res.send('Controller Running')
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'images')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});


export const createEmployee = async (req,res) => {
    
    const uploadImages = multer({storage:storage}).single('photo');
    
    uploadImages(req,res,async function(err)
    {
        console.log(req.file)
        const filename = req.file.filename;
        const{name,age,email,dob,address} = req.body;

    let empData = await new Employees({name:name,age:age,email:email,dob:dob,address:address,photo:filename})
    empData.save();
    return res.status(200).json({
        data:empData,
        message:"Employee Saved",
        status:true
        })
    })
}

export const retrieveEmployee = async (req,res) => {

    const{name,age,email,dob,address,photo} = req.body;

    let empData = await  Employees.find({})
    
    return res.status(200).json({
        data:empData,
        message:"Employee Saved",
        status:true
    });
}

export const employeeDetail = async (req,res) => {

    let empData = await Employees.findOne({_id: req.params.id})
    
    return res.status(200).json({
        data:empData,
        message:"Employee Details",
        status:true
    });
}

export const updateEmployee = async (req,res) => {

    const{name,age,email,dob,address,photo} = req.body;
    
    console.log(req.body);

    const filter = {_id: req.params.id};

    let empData = await Employees.findOneAndUpdate(filter,{name:name,age:age,email:email,dob:dob,address:address,photo:photo})
    
    
    return res.status(200).json({
        data:empData,
        message:"Employee Saved",
        status:true
    });
}

export const deleteEmployee = async (req,res) => {

    console.log(req.params.id)
    let deleted = await  Employees.deleteOne({_id: req.params.id});
    console.log(deleted);
    
    let empList = await  Employees.find({})

    
    return res.status(200).json({
        data:empList,
        message:"Employee Saved",
        status:true
    });
}
