const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//GET ALL DATA
app.get("/todos", async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM todo");
        res.json(allData);
    } catch(e) {
        console.error(e.message)
    }
})

app.listen(5000, () => {
    console.log("Servidor inicio en puerto 5000")
});