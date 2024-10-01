const {Router} = require("express")
const router = Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { USER_JWT_SECRET } = require("../config")
const { User, Book } = require("../DB")
const {auth} = require("../middleware/user")

router.post("/signup", async(req, res) =>{
    const {name, phone, email ,password}= req.body;
    const hashPassword = await bcrypt.hash(password, 5)

    try{
        const foundUser = await User.findOne({
            email: email,
            password : password
        })
        if(foundUser){
            res.status(404).json({
                msg: "already signed up"
            })
        }
        const newUser = await User.create({
            name, 
            phone, 
            email, 
            password:hashPassword
        })
        res.json({
            msg: "User signup successfully",
            user: newUser
        })

    }catch(error){
        res.status(404).json({
            error: error.message
        })
    }
})
router.post("/signin",async (req, res) =>{
    const { email, password} = req.body;
    try{
        const finduser = await User.findOne({
            email: email
        })
        const comparePassword = await bcrypt.compare(password, finduser.password)
        if(finduser){
            const token = jwt.sign({
                email : email
            },USER_JWT_SECRET, {
                expiresIn: "1d"
            })
            res.cookie("access_token", token,{
                httpOnly: true
            })
            res.json({
                token : token
            })
        }
    }catch(error){
        res.status(404).json({
            error: error.message
        })
    }
})

router.post("/create", auth, async(req, res) =>{
    const { bookTitle, author, genre, yop, isbn} = req.body;
    // const {bookId} = req.params.bookId
    try{
        const newBook = await Book.create({
            bookTitle : bookTitle,
            author : author,
            genre : genre,
            yop : yop,
            isbn : isbn
        })
        res.json({
            msg: "Added",
            newBook
        })
        

    }catch(error){
        res.status(404).json({
            error: error.message
        })
    }
})
router.get("/books", auth, async(req, res) =>{
    const allBook = await Book.find({})
    res.json({
        allBook: allBook
    })
})
router.put("/edit/:id",auth, async(req, res) =>{
    const {id} = req.params;
    const {bookTitle, author, genre, yop, isbn} = req.body;

    const update = await Book.findByIdAndUpdate(id,{
        bookTitle: bookTitle,
        author: author,
        genre: genre,
        yop: yop,
        isbn: isbn
    })
    res.json({
        msg: "Updated",
        update
    })
})
router.delete("/delete/:id",auth, async(req, res) =>{
    const {id} = req.params;
    const dlt = await Book.findByIdAndDelete(id)
    res.json({
        msg: "deleted",
        dlt
    })
})


module.exports = {router}