const employeesCtrl = {}

const Employee = require('../models/Employee')


employeesCtrl.getEmployees = async (req, res) => {
    const employees =  await Employee.find()
    console.log(Employee)
    res.json(employees)
}

employeesCtrl.createEmployee = async (req, res) => { 
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee Created'})
}

employeesCtrl.getEmployee = async (req, res) => {
    console.log(req.params)
    const employee = await Employee.findById({_id: req.params.id})
    await Employee.save()
    res.send(employee);
}

employeesCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'employee Updated'})
}

employeesCtrl.deleteEmployee = async (req, res) =>  { 
    await Employee.findByIdAndDelete(req.params,id)
    res.json({status: 'Employee Delete'})
};


module.exports = employeesCtrl;