require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const spellCheckRoute = require("./routes/spellCheck");
const grammarCheckkRoute = require("./routes/grammarCheck");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoute);
app.use("/api/spellCheck", spellCheckRoute);
app.use("/api/grammarCheck", grammarCheckkRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})