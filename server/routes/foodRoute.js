const express = require("express")
const { addfood, foodList, removeFood } = require("../controller/foodController")
const multer = require("multer")


const foodRouter = express.Router();

//image Storage engin
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/")
    },
    filename: (req, file, cb) => {
         cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage })


foodRouter.post("/add", upload.single("image"), addfood)
foodRouter.get("/list", foodList)
foodRouter.delete("/remove", removeFood)

module.exports = foodRouter;
