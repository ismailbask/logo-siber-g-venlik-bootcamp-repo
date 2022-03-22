const users = require("../data/users.json");
getUserById = (userId) => {
    try {
        const user = users.filter(x => x.id == userId);//Gönderilen id değerinin filter fonksiyonu ile obje içindeki değerini bulmak.
        return user;
    } catch (error) {
        return `Bir hata ile karşılaşıldı ${error}`//hata mesajı
    }
};
getAllUsers = () => {
    return users;
}
module.exports = {
    getUserById,
    getAllUsers
}