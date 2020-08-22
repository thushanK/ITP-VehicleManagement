const express = require("express");
const connectDB = require("./config/db");

const vehicleRoute = require("./routes/vehicle");
const previousOwnerRoute = require("./routes/previousOwner");
const repairRoute = require("./routes/repair");

connectDB();

const app = express();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Runing."));
app.use("/api/PreviousOwner", previousOwnerRoute);
app.use("/api/Vehicle", vehicleRoute);
app.use("/api/Repair", repairRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App runing at port ${PORT}`));
