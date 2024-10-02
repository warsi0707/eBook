const {Router} = require("express")
const router = Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { USER_JWT_SECRET } = require("../config")
const { User, Book } = require("../DB")
// const {auth} = require("../middleware/user")
const {z} = require("zod")
const flash = require("connect-flash")

router.post("/signup", async(req, res) =>{
    const requireBody = z.object({
        name: z.string().min(3).max(50),
        password: z.string().min(3).max(50),
        phone: z.number().min(5).max(20),
        email: z.string().min(3).max(50).email()
    })
    const  validation = requireBody.safeParse(req.body)
    res.json({
        message: "incorrect fromate",
        error: validation.error
    })
    const {name, phone, email ,password}= req.body;
    const hashPassword = await bcrypt.hash(password, 5)

    try{
        const foundUser = await User.findOne({
            email: email,
            password : password
        })
        if(foundUser){
            res.status(404).json({
                message: "User Already sign up",
            })
        }
        const newUser = await User.create({
            name, 
            phone, 
            email, 
            password:hashPassword
        })
        res.status(200).json({
            message: "User signup successfully",
            user: newUser,
           
        })

    }catch(error){
        res.status(404).json({
           message : "Invalid credentials"
        })
    }
})
router.post("/signin",async (req, res) =>{
    // const requireBody = z.object({
    //     email: z.string().min(3).max(50).email(),
    //     password: z.string().min(3).max(50)
    // })
    // const  validation = requireBody.safeParse(req.body)
    // res.json({
    //     message: "incorrect fromate",
    //     error: validation.error
    // })
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
            res.status(200).json({
                 message: "Login successfull",
                token : token,
            })
        }
    }catch(error){
        res.status(404).json({
           message : "Invalid credentials"
        })
    }
})

router.post("/create",  async(req, res) =>{ //we can add auth middleware to authenticate
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
router.get("/books",  async(req, res) =>{
    const allBook = await Book.find({})
    res.json({
        allBook: allBook
    })
})
router.get("/book/:id", async(req, res) =>{ //we can add auth middleware to authenticate
    const { id } =req.params;
    try{
        const book = await Book.findById({_id:id})
        res.json({
            book: book
        })
    }catch(error){
        res.status(404).json({
            error: error.message
        })
    }
})
router.put("/edit/:id", async(req, res) =>{ //we can add auth middleware to authenticate
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
router.delete("/delete/:id", async(req, res) =>{ //we can add auth middleware to authenticate
    const {id} = req.params;
    const dlt = await Book.findByIdAndDelete(id)
    res.json({
        msg: "deleted",
        dlt
    })
})


module.exports = {router}