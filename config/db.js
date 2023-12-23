// const mongoose = require("mongoose");
// try {
//   mongoose.connect("mongodb://localhost:27017/Ecommerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });
//   console.log("Database Connected Successfully");
// } catch (err) {
//   console.log("Database Not Connected");
// }

const mongoose = require("mongoose");
  try{
  mongoogse.connect(`mongodb+srv://aneemes:aneemes@cluster0.ha1eh.mongodb.net/gadgetly`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    console.log("MongoDB Database Connected Successfully");

  }catch(err) {
    console.error("Database Connection Error:", err);
  };
