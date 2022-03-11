class TeaController{
    itinerary(req,res,next){
        res.render('tea/itinerary');
    }
    information(req,res,next){
        res.render('tea/information');
    }
}

module.exports = new TeaController;