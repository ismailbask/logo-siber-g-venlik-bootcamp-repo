const posts = require("../data/posts.json");
getPostById = (postId) => {
    try {
        const post = posts.filter(x => x.id == postId);//Gönderilen id değerinin filter fonksiyonu ile obje içindeki değerini bulmak.
        return post;
    } catch (error) {
        return `Bir hata ile karşılaşıldı ${error}` //hata mesajı
    }
};
getAllPosts = () => {
    return posts
}
module.exports = {
    getPostById,
    getAllPosts
}