class CoffeeController{
    itinerary(req,res,next){
        res.render('coffee/itinerary');
    };
    information(req,res,next){
        res.render('coffee/information');
    }
}

module.exports = new CoffeeController;