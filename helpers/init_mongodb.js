const mongoose= require("mongoose");
url=process.env.url
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then((res)=>{
    console.log("Mongodb Connected");
})
.catch((err)=>{
    console.log(err.message);
})