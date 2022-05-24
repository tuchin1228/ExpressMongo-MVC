const Employee = require('../Model/Employee')

const GetEmployee = async (req, res, next) => {

    const employees = await Employee.find()
    res.json({
        success: true,
        employee: employees
    })
}

const AddEmployee = async (req, res, next) => {

    let body = req.body;

    await Employee.create({
        name: body.name ? body.name : null,
        age: body.age ? body.age : null
    }).catch(err => {
        res.json({
            success: false,
            msg: '發生錯誤'
        })
    })
    res.json({
        success: true,
        msg: '新增成功'
    })


}


module.exports = {
    GetEmployee,
    AddEmployee
}