// fetch informações User

URL_API = "https://test-final.b8one.academy/"


async function fetchUser() {
    const response = await fetch(URL_API + "user");
    const userData = await response.json();
    return userData
}

// function populateMenuUser()

async function populateUser() {
    const dataUser = await fetchUser();

    //populando nome da empresa
    const populateHtmlOrganization = document.querySelector('.header__logo-name');
    populateHtmlOrganization.innerHTML = dataUser.organization;
     
    //populando nome do usuário
    const populateHtmlUsername = document.querySelector('.header__menu-perfil-name');
    populateHtmlUsername.innerHTML = dataUser.username;

    //populando imagem do usuário
     const populateHtmlPhoto = document.querySelector('.header__menu-perfil-avatar');
     populateHtmlPhoto.src = dataUser.photo
}

populateUser()