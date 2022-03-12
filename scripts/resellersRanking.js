URL_API = "https://test-final.b8one.academy/"

async function fetchResellers() {
    const response = await fetch(URL_API + "resellers/ranking");
    const arrayResellers = await response.json();
    return arrayResellers
}

async function populateResellers() {
    const resellersData = await fetchResellers();
    const arrayDataResellers = resellersData.resellers
    debugger;
    
    const resellersRankingList = document.querySelector('.tab-resellers__ranking-list');
    const resellersTable = arrayDataResellers.map((item, index) => {
        const isPositive = parseInt(item.percentage, 10) >= 0;

        return `
        <li class="tab-resellers__ranking-item">
                <div class="tab-resellers__ranking-position">
                    ${index + 1}°
                </div>
                <svg class="tab-resellers__ranking-avatar" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
                    <path d="M10.6847 26V14.3636H12.4403V19.4205H18.2415V14.3636H20.0028V26H18.2415V20.9261H12.4403V26H10.6847ZM22.5597 26V14.3636H26.7074C27.6089 14.3636 28.357 14.5189 28.9517 14.8295C29.5502 15.1402 29.9972 15.5701 30.2926 16.1193C30.5881 16.6648 30.7358 17.2955 30.7358 18.0114C30.7358 18.7235 30.5862 19.3504 30.2869 19.892C29.9915 20.4299 29.5445 20.8485 28.946 21.1477C28.3513 21.447 27.6032 21.5966 26.7017 21.5966H23.5597V20.0852H26.5426C27.1108 20.0852 27.5729 20.0038 27.929 19.8409C28.2888 19.678 28.5521 19.4413 28.7188 19.1307C28.8854 18.8201 28.9688 18.447 28.9688 18.0114C28.9688 17.572 28.8835 17.1913 28.7131 16.8693C28.5464 16.5473 28.2831 16.3011 27.9233 16.1307C27.5672 15.9564 27.0994 15.8693 26.5199 15.8693H24.3153V26H22.5597ZM28.304 20.75L31.179 26H29.179L26.3608 20.75H28.304Z" fill="#425DC7"/>
                </svg>
                <div class="tab-resellers__ranking-infos">
                    <span style="width: 100%;">${item.name}</span>
                    <div class="tab-resellers__ranking-demand">
                        <span>${item.ordersCount} pedidos</span>
                        <div style="display: flex;">
                            <span class="tab-resellers__ranking-percent-num ${isPositive ? 'positive': ''}">${item.percentage}</span>
                            <svg class="tab-resellers__ranking-percent-icon ${isPositive ? '' : 'iconNegative'}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </li>

            
        `
    })

    const resellersHtml = resellersTable.join(" ");
    resellersRankingList.insertAdjacentHTML("beforeend", resellersHtml);
}

populateResellers();


{/* <li class="tab-resellers__ranking-item">
                <span class="tab-resellers__ranking-position">
                    ${index + 1}°
                </span>
                <svg class="tab-resellers__ranking-avatar" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
                    <path d="M10.6847 26V14.3636H12.4403V19.4205H18.2415V14.3636H20.0028V26H18.2415V20.9261H12.4403V26H10.6847ZM22.5597 26V14.3636H26.7074C27.6089 14.3636 28.357 14.5189 28.9517 14.8295C29.5502 15.1402 29.9972 15.5701 30.2926 16.1193C30.5881 16.6648 30.7358 17.2955 30.7358 18.0114C30.7358 18.7235 30.5862 19.3504 30.2869 19.892C29.9915 20.4299 29.5445 20.8485 28.946 21.1477C28.3513 21.447 27.6032 21.5966 26.7017 21.5966H23.5597V20.0852H26.5426C27.1108 20.0852 27.5729 20.0038 27.929 19.8409C28.2888 19.678 28.5521 19.4413 28.7188 19.1307C28.8854 18.8201 28.9688 18.447 28.9688 18.0114C28.9688 17.572 28.8835 17.1913 28.7131 16.8693C28.5464 16.5473 28.2831 16.3011 27.9233 16.1307C27.5672 15.9564 27.0994 15.8693 26.5199 15.8693H24.3153V26H22.5597ZM28.304 20.75L31.179 26H29.179L26.3608 20.75H28.304Z" fill="#425DC7"/>
                </svg>
                <div class="tab-resellers__ranking-infos">
                    <span class="tab-resellers__ranking-name">
                        ${item.name}
                    </span>
                    <div class="tab-resellers__ranking-demand">
                        <span>${item.ordersCount} pedidos</span> <span class="tab-resellers__ranking-percent-num ${isPositive ? 'positive': ''}">${item.percentage}</span>
                        <svg class="tab-resellers__ranking-percent-icon ${isPositive ? '' : 'iconNegative'}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </div>
                </div>
            </li> */}