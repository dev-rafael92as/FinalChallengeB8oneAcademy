// Interação Dropdown

let dropdownToSale = document.getElementById('toSale')
let dropDownMenu1 = document.getElementById('dropdownSale');
let dropDownIcon1 = document.getElementById('iconSale')
    
    dropdownToSale.addEventListener('click', function() {
        if(dropDownMenu1.classList.contains("sidebar-dropdown__sale--hide")) {
            // esconder outros menus abertos
            dropDownMenu2.classList.add("sidebar-dropdown__finance--hide")
            dropDownMenu2.classList.remove("sidebar-dropdown__finance--visible")
            dropDownIcon2.classList.remove("iconRotate")
            
            dropDownMenu3.classList.add("sidebar-dropdown__config--hide")
            dropDownMenu3.classList.remove("sidebar-dropdown__config--visible")
            dropDownIcon3.classList.remove('iconRotate') 
            

            dropDownMenu4.classList.add("sidebar-dropdown__tool--hide")
            dropDownMenu4.classList.remove("sidebar-dropdown__tool--visible")
            dropDownIcon4.classList.remove('iconRotate');
            

            // abrir menu desejado
            dropDownMenu1.classList.add("sidebar-dropdown__sale--visible")
            dropDownMenu1.classList.remove("sidebar-dropdown__sale--hide")
            dropDownIcon1.classList.add("iconRotate")
        } else {
            dropDownMenu1.classList.add("sidebar-dropdown__sale--hide")
            dropDownMenu1.classList.remove("sidebar-dropdown__sale--visible")
            dropDownIcon1.classList.remove("iconRotate")
        }
})

let dropdownToFinance = document.getElementById('toFinance')
let dropDownMenu2 = document.getElementById('dropdownFinance');
let dropDownIcon2 = document.getElementById('iconFinance')

    dropdownToFinance.addEventListener('click', function() {
        if(dropDownMenu2.classList.contains("sidebar-dropdown__finance--hide")) {
            // esconder outros menus abertos
            dropDownMenu1.classList.add("sidebar-dropdown__sale--hide")
            dropDownMenu1.classList.remove("sidebar-dropdown__sale--visible")
            dropDownIcon1.classList.remove("iconRotate")
            
            dropDownMenu3.classList.add("sidebar-dropdown__config--hide")
            dropDownMenu3.classList.remove("sidebar-dropdown__config--visible")
            dropDownIcon3.classList.remove('iconRotate') 

            dropDownMenu4.classList.add("sidebar-dropdown__tool--hide")
            dropDownMenu4.classList.remove("sidebar-dropdown__tool--visible")
            dropDownIcon4.classList.remove('iconRotate');
            
            // abrir menu desejado
            dropDownMenu2.classList.add("sidebar-dropdown__finance--visible")
            dropDownMenu2.classList.remove("sidebar-dropdown__finance--hide")
            dropDownIcon2.classList.add("iconRotate")
        } else {
            dropDownMenu2.classList.add("sidebar-dropdown__finance--hide")
            dropDownMenu2.classList.remove("sidebar-dropdown__finance--visible")
            dropDownIcon2.classList.remove("iconRotate")

    }
})

let dropdownToConfig = document.getElementById('toConfig');
let dropDownMenu3 = document.getElementById('dropdownConfig');
let dropDownIcon3 = document.getElementById('iconConfig');
    
    dropdownToConfig.addEventListener('click', function() {
        if(dropDownMenu3.classList.contains("sidebar-dropdown__config--hide")) {
           // esconder outros menus abertos
           dropDownMenu1.classList.add("sidebar-dropdown__sale--hide")
           dropDownMenu1.classList.remove("sidebar-dropdown__sale--visible")
           dropDownIcon1.classList.remove("iconRotate")
           
           dropDownMenu2.classList.add("sidebar-dropdown__finance--hide")
           dropDownMenu2.classList.remove("sidebar-dropdown__finance--visible")
           dropDownIcon2.classList.remove("iconRotate")

           dropDownMenu4.classList.add("sidebar-dropdown__tool--hide")
           dropDownMenu4.classList.remove("sidebar-dropdown__tool--visible")
           dropDownIcon4.classList.remove('iconRotate'); 
            
           // abrir menu desejado
           dropDownMenu3.classList.add("sidebar-dropdown__config--visible")
           dropDownMenu3.classList.remove("sidebar-dropdown__config--hide")
           dropDownIcon3.classList.add('iconRotate') 
        } else {
            dropDownMenu3.classList.add("sidebar-dropdown__config--hide")
            dropDownMenu3.classList.remove("sidebar-dropdown__config--visible")
            dropDownIcon3.classList.remove('iconRotate') 
        }
})

let dropdownToTool = document.getElementById('toTool');
let dropDownMenu4 = document.getElementById('dropdownTool');
let dropDownIcon4 = document.getElementById('iconTool')
    
    dropdownToTool.addEventListener('click', function() {
        if(dropDownMenu4.classList.contains("sidebar-dropdown__tool--hide")) {
            // esconder outros menus abertos
            dropDownMenu1.classList.add("sidebar-dropdown__sale--hide")
            dropDownMenu1.classList.remove("sidebar-dropdown__sale--visible")
            dropDownIcon1.classList.remove("iconRotate")
            
            dropDownMenu2.classList.add("sidebar-dropdown__finance--hide")
            dropDownMenu2.classList.remove("sidebar-dropdown__finance--visible")
            dropDownIcon2.classList.remove("iconRotate")
 
            dropDownMenu3.classList.add("sidebar-dropdown__config--hide")
            dropDownMenu3.classList.remove("sidebar-dropdown__config--visible") 
            dropDownIcon3.classList.remove('iconRotate') 
             
            // abrir menu desejado
            dropDownMenu4.classList.add("sidebar-dropdown__tool--visible")
            dropDownMenu4.classList.remove("sidebar-dropdown__tool--hide")
            dropDownIcon4.classList.add('iconRotate');
         } else {
             dropDownMenu4.classList.add("sidebar-dropdown__tool--hide")
             dropDownMenu4.classList.remove("sidebar-dropdown__tool--visible")
             dropDownIcon4.classList.remove('iconRotate');
         }
})

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

// fetch informações Menu Sidebar

async function fetchMenu() {
    const response = await fetch(URL_API + "menu");
    const userMenu = await response.json();
    return userMenu
}

// Populando Menu Sidebar

async function populateMenu() {
    const userMenu = await fetchMenu();
    const arrayMenu = userMenu.menuTree

    const menuSidebarList = document.querySelector('.sidebar__menu-list')
    const menuHtmlArray = arrayMenu.map((item, index) => {
        
        return {}
        
        
        
    })
}

populateMenu()

// fetch informações ListaProdutos

async function fetchProducts() {
    const response = await fetch(URL_API + "products/more-sold");
    const arrayProducts = await response.json();
    return arrayProducts
}

async function populateProducts() {
    const productData = await fetchProducts();
    const arrayDataProducts = productData.products
    
    const tableGroupList = document.querySelector(".sale-products__table");
    const productsTable = arrayDataProducts.map((item, index) => {
        return `
        <tr class="sale-products__table-tr">
            <td class="sale-products__table-td">
                <div class="sale-products__table-td-container">
                    <span class="sale-products__table-td-num">
                        ${index + 1}
                    </span>
                    <img referrerpolicy="no-referrer" src="${item.image}" alt="${item.name}" class="sale-products__table-td-img">
                    <span class="sale-products__table-td-description">
                        ${item.name}
                    </span>
                </div>
            </td>
            <td class="sale-products__table-td">
                ${'#' + item.orderId}
            </td>
            <td class="sale-products__table-td">
                ${item.department}
            </td>
            <td class="sale-products__table-td">
                ${(item.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </td>
        </tr> 
        `
    })
    const tableHtml = productsTable.join(" ");
    tableGroupList.insertAdjacentHTML("beforeend", tableHtml)
    
}

populateProducts()

async function populateProductsMobile() {
    const productDataMobile = await fetchProducts();
    const arrayDataProductsMobile = productDataMobile.products
    
    const tableGroupListMobile = document.querySelector(".sale-products__table-mobile");
    const productsTableMobile = arrayDataProductsMobile.map((item, index) => {
        return `
        <div class="sale-products__table-mobile-row">
            <div class="sale-products__table-mobile-row-up">
                <img referrerpolicy="no-referrer" src="${item.image}" alt="${item.name}" class="sale-products__table-mobile-img">
                <span class="sale-products__tabel-mobile-description">
                    ${item.name}
                </span>
            </div>
            <div class="sale-products__table-mobile-row-down">
                <span class="sale-products__table-mobile-num">
                    ${index + 1}
                </span>
                <span class="sale-products__table-mobile-code">
                    ${'#' + item.orderId}
                </span>
                <span class="sale-products__table-mobile-price">
                        ${(item.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </span>
            </div>
        </div>
        `
    })

    const tableHtmlMobile = productsTableMobile.join(" ");
    tableGroupListMobile.insertAdjacentHTML("beforeend", tableHtmlMobile)
}

populateProductsMobile()

// fetch Informações Sales 

async function fetchSales() {
    const response = await fetch(URL_API + "sales");
    const salesList = await response.json();
    return salesList
}

// populando número de vendas

async function populateSales() {
    const saleList = await fetchSales();

    // Populando ticket médio
    const populateHtmlAverageTicket = document.getElementById('averageTicket');
    populateHtmlAverageTicket.innerHTML = (saleList.averageTicket/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    
    // Populando Ventas Totais
    const populateHtmltotalSales = document.getElementById('totalSales');
    populateHtmltotalSales.innerHTML = saleList.totalSales

    // Populando revenues
    const populateHtmlRevenues = document.getElementById('valueRevenues');
    populateHtmlRevenues.innerHTML = (saleList.revenues/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

populateSales()