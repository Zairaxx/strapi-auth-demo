let user = document.querySelector("#user")
let password = document.querySelector("#password");
let registerUser = document.querySelector("#registerUser")
let registerEmail = document.querySelector("#registerEmail")
let registerPassword = document.querySelector("#registerPassword")
let fruitName = document.querySelector("#fruitName");
let fruitPrice = document.querySelector("#fruitPrice");

let getFruits = async () => {
    // With Fetch
    // let response = await fetch("http://localhost:1337/api/fruits", {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       }
    // })

    //With Axios
    let response = await axios.get("http://localhost:1337/api/fruits",{
        //config
        headers:{
            Authorization:`Bearer ${sessionStorage.getItem("token")}`
        }
    });
    console.log(response.data);
    response.data.data.forEach(fruit => {
        
        document.querySelector("#fruits-container").innerHTML+= `<p>${fruit.attributes.fruitName}<button onClick="deleteFruit(${fruit.id})">Delete</button><button onClick="editFruit(${fruit.id})">Make free!</button></p>`
    })
}

let login = async () => {

    //With Axios
    let response = await axios.post(
        "http://localhost:1337/api/auth/local",
    {
        //body
        identifier:user.value,
        password:password.value
    });
    let token = response.data.jwt;

    //With Fetch

    // let info = {
    //     identifier:user.value,
    //     password:password.value
    // }
    // let response = await fetch("http://localhost:1337/api/auth/local", {
    //     method:"POST",
    //     body: JSON.stringify(info),
    //     headers: {
    //         'Content-Type': 'application/json'
    //       }
    // })
    // let json = await response.json();
    // console.log(json);
    // let token = json.jwt;


    console.log("Got the JWT!", token);
    sessionStorage.setItem("token", token)

}

let addFruit = async () => {

    let response = await axios.post("http://localhost:1337/api/fruits", {
        data: {
            fruitName: fruitName.value,
            price: fruitPrice.value
        }
    }, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    })
    console.log(response);
}


let deleteFruit = async (id) => {

    let response = await axios.delete(`http://localhost:1337/api/fruits/${id}`,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        }
    )
    console.log("id",id);
    console.log("Deleted fruit", response)
    
}

let editFruit = async (id) => {
    let response = await axios.put(`http://localhost:1337/api/fruits/${id}`, {
    //body
    data: {
        price:0
    }
    },
    {
        //config
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    });
    console.log("Edited fruit", response)
}

let register = async () => {
    //With Axios
    let response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
    {
        //body
        username:registerUser.value,
        password:registerPassword.value,
        email:registerEmail.value
    });
    console.log("Registered!", response);
    let token = response.data.jwt;

    console.log("Got the JWT!", token);
    sessionStorage.setItem("token", token)
}

document.querySelector("#login").addEventListener("click", login);
document.querySelector("#addFruit").addEventListener("click", addFruit)