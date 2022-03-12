class TeaController{
    itinerary(req,res,next){
        res.render('tea/itinerary');
    }
    information(req,res,next){
        res.render('tea/information');
    }
    art(req,res,next){
        res.render('tea/art');
    }
    coldbrewtea(req,res,next){
        res.render('tea/coldbrewtea');
    }
}

module.exports = new TeaController;