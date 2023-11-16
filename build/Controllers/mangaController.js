const mangaModel = require('../models/mangaModel')

const postManga = async(req, res) => {
    try {
        const {name, autor, caption, thumbnail, pages} = req.body
        
        const putCaption = "";
        const putThumb = "";

        if(name == null)
            return res.status(400).json('input a name');

        if(caption != null)
            putCaption = caption;

        if(thumbnail != null)
            putThumb = thumbnail;

        if(pages.length == 0)
            return res.status(400).json('input atleast 1 page');
        
        const putName = name;
        const putAutor = autor._id;

        let manga = new mangaModel({
            putName,
            putAutor,
            putCaption,
            putThumb,
            pages,
        })
        
        await manga.save()

        res.status(200).json('manga posted succsessfully')
    } catch(e) {
        console.log(e)
    }

}

const getManga = async(req, res) => {
    const {mangaId} = req.params
    try {
        const manga = await mangaModel.find({mangaId})
        res.status(200).json(manga)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

const getSomeManga = async(req, res) => {
    const {autorId} = req.params
    try {
        const allManga = await mangaModel.find({autorId})
        res.status(200).json(allManga);
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

module.exports = {
    postManga,
    getManga,
    getSomeManga
}