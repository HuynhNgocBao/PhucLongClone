class CoffeeController{
    itinerary(req,res,next){
        res.render('coffee/itinerary');
    }
}

module.exports = new CoffeeController;