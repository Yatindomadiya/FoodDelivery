import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import './Add.css'
import { toast } from 'react-toastify';

const Add = () => {
  const [image, setimage] = useState(false)
  const URl='http://localhost:3000/api'
  const [data, setData] = useState({
    name: '',
    description: '',
    category: 'salad',
    price: '',
  })

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  const handlesubmit = async (event) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("category", data.category)
    formData.append("image", image)

    const response = await axios.post(`${URl}/food/add`, formData)
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        category: 'salad',
        price: ''
      })
      setimage(false)
      toast.success(response.data.message)
    }
    else {

    }
    toast.error(response.data.error)
  }

  return (
    <div>
      <div className="add">
        <form className="flex_col" action='' >
          <div className="add_img_upload flex_col">
            <p>Upload image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input type="file" id='image' name='image' onChange={(e) => { setimage(e.target.files[0]) }} hidden required />

          </div>
          <div className="add_product_name flex_col">
            <p>Product name</p>
            <input type="text" name='name' onChange={handlechange} value={data.name} placeholder='type here' />
          </div>
          <div className="add_product_description flex_col">
            <p>Product Description</p>
            <textarea name="description" rows='6' onChange={handlechange} value={data.description} placeholder='Write content here'></textarea>
          </div>
          <div className="add_category_price">
            <div className="add_category flex_col">
              <p>Product category</p>
              <select name="category" onChange={handlechange}>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure veg">Pure veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add_price flex_col">
              <p>Product price</p>
              <input type="Number" name='price' onChange={handlechange} value={data.price} placeholder='₹120' />
            </div>
          </div>
          <button type='button' onClick={handlesubmit} className='add_btn'>ADD</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
