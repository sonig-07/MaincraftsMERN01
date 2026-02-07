const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model("User", UserSchema);

// API route
app.get("/api/users", async (req,res)=>{
  const users = await User.find();
  res.json(users);
});

// Seed test data (run once)
app.get("/seed", async(req,res)=>{
  await User.create([{name:"Rohit"}, {name:"Soni"}]);
  res.send("Seeded");
});

app.listen(5000, ()=> console.log("Server running on 5000"));
