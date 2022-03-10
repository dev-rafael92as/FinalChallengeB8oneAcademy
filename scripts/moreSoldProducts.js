URL_API = "https://test-final.b8one.academy/"

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