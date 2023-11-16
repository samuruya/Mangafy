const express = require("express")
const { postManga, getManga, getSomeManga} = require("../Controllers/mangaController")

const router = express.Router()

router.post("/post", postManga);
router.get("/get/:mangaId", getManga);
router.get("/find/:autorId", getSomeManga)

module.exports = router;