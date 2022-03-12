class CoffeeController{
    itinerary(req,res,next){
        res.render('coffee/itinerary');
    };
    information(req,res,next){
        res.render('coffee/information');
    };
    art(req,res,next){
        res.render('coffee/art');
    }
}

module.exports = new CoffeeController;