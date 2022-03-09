// Lógica para validação do login

const init = () => {

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const spanValidation = document.querySelector(".auth-page__input-auth-validation")
  const inputButton = document.querySelector(".auth-page__submit");

  if(inputButton) {
    inputButton.addEventListener('click', (event) => {
      event.preventDefault();

      spanValidation.innerHTML = ""
      inputEmail.classList.remove(".auth-page__input-auth--validation");

        fetch ("https://test-final.b8one.academy/login", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputEmail.value,
          password: inputPassword.value,
        })
        }).then((response) => {
          return response.json()
          }).then((data) => {
          console.log(data)

           if(data !== true) {
             inputEmail.classList.add("auth-page__input-auth--validation");
             spanValidation.innerHTML = "Este e-mail não existe, você tem outro?"
           } else {
            window.location.pathname = "index.html"
           }
        })
    })
} }


window.onload = init

// const loginForm = document.querySelector(".auth-page__submit");
// const getEmailInput = document.getElementById('email').value;
// const getPasswordInput = document.getElementById("password").value;


// loginForm.addEventListener('click', event => {
//     event.preventDefault();
    
  
//    async function loginAuth() {
//     const data = await fetch("https://test-final.b8one.academy/login", {
//       method: "post",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
      
//       //make sure to serialize your JSON body
//       body: JSON.stringify({
//         email: getEmailInput,
//         password: getPasswordInput
//       })
//     })
//     const response = await data.json()
//     console.log(response)
//     console.log(getEmailInput)
    
//     }
    

//   loginAuth()
// })



  
  
