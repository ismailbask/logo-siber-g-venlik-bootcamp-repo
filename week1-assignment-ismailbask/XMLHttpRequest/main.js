class Request{
    constructor() {
        this.xhr = new XMLHttpRequest();//bir xhr objesi oluşturuldu
    }
    //GET Request
    get(url,callback) {
        this.xhr.open("GET", url);//bağlantı kuruldu.
        this.xhr.onload = ()=> {//işlem 4 durumunda yani hazır ise
            if (this.xhr.status == 200) {//ve status=200 durumunda yani herhangi bir sorun yoksa
                callback(null,this.xhr.responseText);//responseText ile alınan verileri çekiyor ve isteğimizi bitiriyoruz. 
            }
            else {//Hata olma durumu
                callback("Herhangi bir hata oluştu", null);
            }
        }
        this.xhr.send();//isteğimizi gönderdik. get request yapıldığı için bir şey yazılmadı içine.
    }
}
const request = new Request(); //Request objesi oluşturuldu.
request.get("https://jsonplaceholder.typicode.com/users", (error, users) => {
    //Hata olma durumu kontrolü.
    error === null ? console.log(users) : console.log(error);
});



