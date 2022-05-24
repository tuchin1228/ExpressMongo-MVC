const User = require('../Model/User')

const GetUser = async (req, res, next) => {

    const users = await User.find()
    res.json({
        success: true,
        users
    })
}


const AddUser = async (req, res, next) => {

    let body = req.body;
    await User.create({
        name: body.name ? body.name : null,
        age: body.age ? body.age : null,
        books: body.books ? body.books : null,
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

const FilterBooks = async (req, res, next) => {
    // res.json(req.query)
    let minPrice = req.query.minPrice ? Number(req.query.minPrice) : null;
    let maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : null;
    // res.json(minPrice)
    let user = await User.aggregate([{
            $match: {
                "books.price": {
                    "$gt": minPrice
                    // $exists: true,
                    // $not: {
                    //     $size: 0
                    // }
                }
            }
        },
        {
            $project: {
                "name": 1,
                books: {
                    $filter: {
                        input: "$books",
                        as: "book",
                        cond: {
                            $gt: ["$$book.price", minPrice]
                        }
                    }
                }
            }
        },
    ]);

    // let user = await User.find({
    //     "books": {
    //         "$elemMatch": {
    //             "price": {
    //                 "$gt": minPrice
    //             }
    //         }
    //     }
    // })

    // let user = await User.find({
    //     "books.price": {
    //         "$gt": minPrice
    //     }
    // })

    // let user = await User.find({
    //     "books": {
    //         $exists: true,
    //         $not: {
    //             $size: 0
    //         }
    //     }
    // })

    res.json({
        success: true,
        user: user
    })
}

module.exports = {
    GetUser,
    AddUser,
    FilterBooks
}