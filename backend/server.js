const express = require("express");

const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from the backend!",
        data: ["item1", "item2", "item3"]
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
