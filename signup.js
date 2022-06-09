const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    let nameInput = document.getElementById("name");
    let IDInput = document.getElementById("ID");
    let passwordInput = document.getElementById("password");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let newAccount = {
      name: nameInput.value,
      ID : IDInput.value,
      password : passwordInput.value,
      type: "user"
    }
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));

});
