const submitButton = document.getElementById("submit");
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];


submitButton.addEventListener("click", () => {
    let ID = document.getElementById("ID").value;
    let password = document.getElementById("password").value;
    let found = false;
    for(let i = 0; i < accounts.length; i++){
      if(accounts[i].ID == ID){
        found = true;
        if(accounts[i].password == password){
          localStorage.setItem("name", accounts[i].name);
          localStorage.setItem("currentUser", JSON.stringify(accounts[i]));
          if(accounts[i].type == "admin"){
            window.location.href = "admin.html";
          } else {
            window.location.href = "home.html";
          }
          break;
        } else {
          alert("Password Or ID is wrong");
          break;
        }
      }
    }
    if(!found){
      alert("Account Not Found");
    }

});
