let user = document.querySelector("#user")
let password = document.querySelector("#password");

let getFruits = async () => {
    // let response = await fetch("http://localhost:1337/api/fruits", {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       }
    // })

    let response = await axios.get("http://localhost:1337/api/fruits",{
        //config
        headers:{
            Authorization:`Bearer ${sessionStorage.getItem("token")}`
        }
    });
    console.log(response.data);
    response.data.data.forEach(fruit => {
        
        document.querySelector("#fruits-container").innerHTML+= `<p>${fruit.attributes.fruitName}</p>`
    })
}

let login = async () => {
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

document.querySelector("#login").addEventListener("click", login)