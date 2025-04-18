import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//function for Adding Products
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    //storing the images in cloudinary
    const imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imageUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save(); //Product info stored in DB
    console.log("product", product);

    res.json({
      success: true,
      message: "Product Added",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//function for listing Product
const listProduct = async (req, res) => {
  try {
    const listedProducts = await productModel.find({});
    res.json({
      success: true,
      message: listedProducts,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//function for removing Products
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Product Removed",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



//function for listing the Single Product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const singleProduct = await productModel.findById(productId);
    res.json({
      success: true,
      message: singleProduct,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, removeProduct, singleProduct, listProduct };
