async function fetchMenuItems() {
    let menuItems = [];

    try {
        const response = await fetch('https://test-final.b8one.academy/menu', {
            method: 'GET',
        });
    
        menuItems = await response.json();
    } catch(err) {
        console.error("Erro ao buscar items do menu", err);
    }
    
    return menuItems;
}

async function renderMenu() {
    const menuItems = await fetchMenuItems();

    if (menuItems != null && menuItems.menuTree.lenght > 0) {
        menuItems.menuTree.forEach(item => {
            
        });
    }
}

renderMenu()

const template = `
    <li class="sidebar__menu-item">
        <span id="toSale" class="sidebar__menu-link">
            <div class="sidebar__menu-flex">
                <div class="sidebar__menu-icon-text">
                <svg class="sidebar__menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.087 2.02852C11.1249 0.927887 12.8751 0.927887 13.913 2.02852C14.5279 2.68061 15.4326 2.97456 16.3133 2.80843C17.7999 2.52803 19.2159 3.55679 19.4086 5.05724C19.5228 5.94621 20.0819 6.7158 20.8921 7.09907C22.2596 7.74599 22.8004 9.41058 22.0744 10.7377C21.6442 11.524 21.6442 12.4753 22.0744 13.2616C22.8004 14.5887 22.2596 16.2533 20.8921 16.9002C20.0819 17.2835 19.5228 18.0531 19.4086 18.9421C19.2159 20.4425 17.7999 21.4713 16.3133 21.1909C15.4326 21.0247 14.5279 21.3187 13.913 21.9708C12.8751 23.0714 11.1249 23.0714 10.087 21.9708C9.47213 21.3187 8.56741 21.0247 7.68666 21.1909C6.2001 21.4713 4.7841 20.4425 4.59141 18.9421C4.47724 18.0531 3.91809 17.2835 3.1079 16.9002C1.74043 16.2533 1.19956 14.5887 1.92562 13.2616C2.35579 12.4753 2.35579 11.524 1.92562 10.7377C1.19956 9.41058 1.74043 7.74599 3.1079 7.09907C3.91809 6.7158 4.47724 5.94621 4.59141 5.05724C4.7841 3.55679 6.2001 2.52803 7.68666 2.80843C8.56741 2.97456 9.47213 2.68061 10.087 2.02852Z" fill="#CDD2EB"/>
                    <path d="M8.46967 14.4694C8.17678 14.7623 8.17678 15.2371 8.46967 15.53C8.76256 15.8229 9.23744 15.8229 9.53033 15.53L8.46967 14.4694ZM15.5303 9.53002C15.8232 9.23713 15.8232 8.76226 15.5303 8.46936C15.2374 8.17647 14.7626 8.17647 14.4697 8.46936L15.5303 9.53002ZM9.53033 15.53L15.5303 9.53002L14.4697 8.46936L8.46967 14.4694L9.53033 15.53Z" fill="#425DC7"/>
                    <path d="M11.25 8.39982C11.25 9.31109 10.5113 10.0498 9.60001 10.0498C8.68874 10.0498 7.95001 9.31109 7.95001 8.39982C7.95001 7.48855 8.68874 6.74982 9.60001 6.74982C10.5113 6.74982 11.25 7.48855 11.25 8.39982Z" stroke="#425DC7" stroke-width="1.5"/>
                    <path d="M16.05 15.5996C16.05 16.5109 15.3113 17.2496 14.4 17.2496C13.4887 17.2496 12.75 16.5109 12.75 15.5996C12.75 14.6884 13.4887 13.9496 14.4 13.9496C15.3113 13.9496 16.05 14.6884 16.05 15.5996Z" stroke="#425DC7" stroke-width="1.5"/>
                </svg>                                   
                <span class="sidebar__menu-name">
                    Pra vender
                </span>
                </div>
                <svg id="iconSale" class="sidebar__menu-drop-icon" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50024 0.749634L6.00024 5.24963L10.5002 0.749634" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
            </div> 
        </span>
    </li>
`

