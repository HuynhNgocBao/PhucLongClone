class TeaController{
    itinerary(req,res,next){
        res.render('tea/itinerary');
    }
}

module.exports = new TeaController;