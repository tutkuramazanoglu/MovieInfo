const { response } = require("express");
const express=require("express");
const app=express();
const request=require("request");
app.set("view engine",'ejs');
app.use(express.static('public'));

app.listen(2000,()=>{
    console.log("App is running on port 2000");
});

app.get("/movie",(req,res)=>{
    request("http://www.omdbapi.com/?t=gone+with+the+wind&apikey=c52326db",(error,response,body)=>{
        let data=null;
        if(error){
            console.log("Error is occured."+errro);
        }
        else{
        
            data=JSON.parse(body);
            console.log(data);
            res.render("moviePoster",{
                movie:data
            });
        }
    });
});

app.get("/getMovie",(req,res)=>{
    const movieTitle=req.query.movieTitle;
    let movie=null;
    request(`http://www.omdbapi.com/?t=${movieTitle}&apikey=c52326db`,(error,response,body)=>{
        if(error){
            console.log("Error is occured. Error is "+error);
        
        }

        else{
            movie=JSON.parse(body);
            console.log(movie)
            res.render("moviePoster",{
                movie:movie
            })
        }
    });
});