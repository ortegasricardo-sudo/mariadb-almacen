import express from "express";
import morgan from "morgan";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello Wolrd");
});

app.listen(app.get("port"), () => {
    console.log("Server is running on port", app.get("port"));
});
