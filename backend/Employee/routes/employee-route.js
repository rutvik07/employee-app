import express from 'express';

import{test,createEmployee,retrieveEmployee,updateEmployee,deleteEmployee, employeeDetail} from '../controller/employeecontroller'

const router = express.Router();

router.get('/name',test)
router.post('/create-emp',createEmployee)
router.post('/get-emp',retrieveEmployee)
router.post('/update-emp/:id',updateEmployee)
router.get('/delete-emp/:id',deleteEmployee)
router.get('/employee-details/:id',employeeDetail)


export default router;