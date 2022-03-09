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

// fetch com api

