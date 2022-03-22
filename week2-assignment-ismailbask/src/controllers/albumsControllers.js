const albums = require("../data/albums.json");
getAlbumsById = (albumsID) => {//
    try {
        const album = albums.filter(x => x.id == albumsID);//Gönderilen id değerinin filter fonksiyonu ile obje içindeki değerini bulmak.
        return album;
    } catch (error) {
        return `Bir hata ile karşılaşıldı ${error}`//Hata mesajı 
    }
};
getAllAlbums = () => {
    return albums
}
module.exports = {
    getAlbumsById,
    getAllAlbums
}