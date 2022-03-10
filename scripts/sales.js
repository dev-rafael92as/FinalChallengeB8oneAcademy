URL_API = "https://test-final.b8one.academy/"

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