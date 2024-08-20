const foodModel = require("../model/foodmodel");

const fs = require('fs');

//add food item

const addfood = async (req, res) => {

    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "food Added" })
        console.log('add api call');
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
        console.log('add api call error');
    }
};
const foodList = async (req, res) => {
    try {
        const food = await foodModel.find({})
        res.json({ 'success': true, data: food })
        console.log('list api call');
    } catch (error) {
        console.log(error);
        res.json({ 'success': false, message: "error" })
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.status(404).json({ success: "false", message: "Food not found" });
        }

        fs.unlink(`upload/${food.image}`, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: "false", message: "Error deleting image" });
            }
        });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: "true", message: "Food removed" });


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: "false", message: "Server error" });
    }

}
module.exports = { addfood, foodList, removeFood };                  