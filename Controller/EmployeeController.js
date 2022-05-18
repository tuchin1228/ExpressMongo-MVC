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
    if (body.name && body.age) {
        await Employee.create({
            name: body.name,
            age: body.age
        }).catch(err=>{
            res.json({
                success: false,
                msg: '發生錯誤'
            })
        })
        res.json({
            success: true,
            msg: '新增成功'
        })
    } else {

        res.json({
            success: false,
            msg: '格式錯誤'
        })
    }


}


module.exports = {
    GetEmployee,
    AddEmployee
}