//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

let veri = "";

fetch("https://api.github.com/users")
    .then((res) => {
        //! Error handling
        if (!res.ok) {
            throw new Error("Something went wrong", res.status);
            // console.log("Something went wrong")
        } else {
            return res.json();
        }
    })
    .then((data) => {
        // veri = data
        // console.log(veri)
        showUsers(data);
    })
    .catch((err) => {
        console.log(err);
        const usersDiv = document.getElementById("users");
        usersDiv.innerHTML = `<h2 class="text-warning">${err}</h2>`;
    });

// console.log(veri)

const showUsers = (users) => {
    console.log(users);
    const usersDiv = document.getElementById("users");

    users.forEach((user) => {
        // console.log(user.login)
        usersDiv.innerHTML += `
         <div class="card col" style="width: 15rem;">
            <img src="${user.avatar_url}" class="card-img-top img-thumbnail" alt="...">

           <div class="card-body">

            <h5 class="card-title">${user.login}</h5>
            <p class="card-text">${user.type + ' ' + user.id}</p>
            <a href="${user.html_url}" class="btn btn-primary">Go somewhere</a>

           </div>

       </div>
    `;
    });
};
