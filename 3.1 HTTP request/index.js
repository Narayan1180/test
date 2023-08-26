import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
});

app.get("/About",(req,res)=>{
    res.send("<h1>Hello</h1>+<p>This is Narayan</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact me on 6283952017</h1>");
});
app.listen(3000,()=>{console.log("Server running on port 3000.");});