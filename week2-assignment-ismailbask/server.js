const express = require("express");
const usersControllers = require("./src/controllers/usersControllers");
const postsControllers = require("./src/controllers/postsControllers");
const albumsControllers = require("./src/controllers/albumsControllers");
const app = express();

const PORT = 5000;//serverin çalışacağı port belirlendi.

app.get("/users", (req, res) => {//tüm userların çekilmesi
    const data = usersControllers.getAllUsers();
    res.status(200).json({
        message: "Tüm kullanıcılar başarılı bir şekilde getirildi.",
        data:data
    })
});
app.get("/users/:userId", (req, res) => {//id'ye göre user'ın çekilmesi
    const userID = req.params.userId;//girilen id değerini params ile yakaladık
    if (userID) {//böyle bir id var mı?
        const user = usersControllers.getUserById(userID);//fonksiyon çağırıldı.
        if (user.length!==0) {//dönen değer boş mu?
            res.status(200).json({//değilse ekrana user'ı bas.
                message:"Kullanıcı başarılı bir şekilde bulundu",
                data: user
            });
        }
        else {//dönen dizi boş ise hata mesajı yayınla.
            res.status(404).json({
                message: "Böyle bir kullanıcı bulunamadı!"
            })
        }
       
    }
});

app.get("/posts", (req, res) => {//tüm postların çekilmesi
    const data = postsControllers.getAllPosts();
    res.status(200).json({
        message: "Tüm postlar başarılı bir şekilde getirildi.",
        data:data
    })
});
app.get("/posts/:postsId", (req, res) => {//id'ye göre post'un çekilmesi
    const postID = req.params.postsId;//girilen id değerini params ile yakaladık
    if (postID) {//böyle bir id var mı?
        const post = postsControllers.getPostById(postID);//fonksiyon çağırıldı.
        if (post.length!==0) {//dönen değer boş mu?
            res.status(200).json({//değilse ekrana user'ı bas.
                message:"Post başarılı bir şekilde bulundu",
                data: post
            });
        }
        else {//dönen dizi boş ise hata mesajı yayınla.
            res.status(404).json({
                message: "Böyle bir post bulunamadı!"
            })
        }
       
    }
});
app.get("/albums", (req, res) => {//tüm albumlerin çekilmesi
    const data = albumsControllers.getAllAlbums();
    res.status(200).json({
        message: "Tüm albumler başarılı bir şekilde getirildi.",
        data:data
    })
});
app.get("/albums/:albumsId", (req, res) => {//id'ye göre albums'un çekilmesi
    const albumsID = req.params.albumsId;//girilen id değerini params ile yakaladık
    if (albumsID) {//böyle bir id var mı?
        const album = albumsControllers.getAlbumsById(albumsID);//fonksiyon çağırıldı.
        if (album.length != 0) {//dönen değer boş mu?
            res.status(200).json({//değilse ekrana user'ı bas.
                message:"Albüm başarılı bir şekilde bulundu",
                data: album
            })  
        }
        else {
            res.status(404).json({//dönen dizi boş ise hata mesajı yayınla.
                message: "Böyle bir album bulunamadı!"
            })
        }
        
    }
})

app.listen(PORT, () => {//port dinlenmeye başlandı
    console.log(`Server ${PORT} üzerinde çalışmaya başladı...`);
})

