const express = require('express');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Item = require('../models/Item');

class CategoryController{
    
    home(req,res,next){
        // Filter search
        let Product_query = Product.find();
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
        Promise.all([Product_query])
        .then(([product])=>{
            
            res.render('category',{
                product: product.map(item=>item.toObject()),
            })
        });
    }
    show(req,res,next){
        // Filter search
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
        const item = new Item(req.body);
        item.save()
        .then(()=>res.redirect(`/category/${req.body.type}/create`));
    }
    item(req,res,next){
        // Filter search
        console.log(req.params);
        let Item_query = Item.find({type: req.params.slug});
        res.locals.sort = {
            price: "default",
            title: "",
        }
        if (req.query.hasOwnProperty('price')){
            res.locals.sort = Object.assign(res.locals.sort,req.query);
            Item_query = Item_query.find({'title': {$regex: `.*${req.query.title}.*`}});
            if (req.query.price !== 'default'){
                Item_query = Item_query.sort({
                    price: req.query.price,
                })
            }
        };
        // Render
        Promise.all([Item_query])
        .then(([items])=>{
            
            res.render('item',{
                items: items.map(item=>item.toObject()),
            })
        });
    }
}

module.exports = new CategoryController();