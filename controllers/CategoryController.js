const express = require('express');
const Category = require('../models/Category');
const Product = require('../models/Product');

class CategoryController{
    
    show(req,res,next){
        // Filter search
        Category.find()
        .then(category=>console.log(category));
        let Product_query = Product.find({category_slug: req.params.slug});
        res.locals.sort = {
            price: "default",
            title: "",
        }
        if (req.query.hasOwnProperty('price')){
            res.locals.sort = Object.assign(res.locals.sort,req.query);
            Product_query = Product_query.find({'title': {$regex: `.*${req.query.title}.*`}});
            if (req.query.price !== 'default'){
                Product_query = Product_query.sort({
                    price: req.query.price,
                })
            }
        };
        // Render
        Promise.all([Category.findOne({slug: req.params.slug}),Product_query])
        .then(([category,product])=>{
            
            res.render('category',{
                category: category.toObject(),
                product: product.map(item=>item.toObject()),
            })
        });
    }
    create(req,res,next){
        res.render('create',{slug:req.params.slug});
    }
    save(req,res,next){
        const product = new Product(req.body);
        product.save()
        .then(()=>res.redirect(`/category/${req.body.category_slug}/create`));
    }
}

module.exports = new CategoryController();