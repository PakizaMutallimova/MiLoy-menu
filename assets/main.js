const model = {
    "categories": [
        {
            "id": 0,
            "name": "BREAKFASTS"
        },
        {
            "id": 1,
            "name": "HOT MEALS"
        },
        {
            "id": 2,
            "name": "SALADS"
        },
        {
            "id": 3,
            "name": "DESERTS"
        }
    ],
    "items": [
        {
            "categoryId": 0,
            "name": "Full English breakfast",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/659733877193862.jpg",
            "description": "Fried eggs, bacon, toast, cherry tomatoes",
            "weight": "400 g",
            "discountS": "5.59",
            "discountM": "7.79",
            "discountL": "10.00",
            "priceS": "4.99",
            "priceM": "6.99",
            "priceL": "8.99"
        },
        {
            "categoryId": 0,
            "name": "Oatmeal",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/659733877193862.jpg",
            "description": "Oatmeal with seasonal berries and berry syrup",
            "weight": "150 g",
            "discount": "4",
            "price": "3.25"
        },
        {
            "categoryId": 0,
            "name": "Cheese pancakes with jam",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/659733877193862.jpg",
            "description": "Fresh cottage cheese pancakes with strawberry jam and sour cream",
            "weight": "150 g",
            "discount": "",
            "price": "4.6"
        },
        {
            "categoryId": 0,
            "name": "Avocado toast",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/659733877193862.jpg",
            "description": "Rye toast with avocado and boiled egg",
            "weight": "70 g",
            "discount": "3",
            "price": "2.15"
        },
        {
            "categoryId": 0,
            "name": "Catfish on pumpkin puree",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/659733877193862.jpg",
            "description": "Catfish fillet baked with young potatoes. Served with salad and pumpkin puree",
            "weight": "380 g",
            "discount": "",
            "price": "6.5"
        },
        {
            "categoryId": 1,
            "name": "\"Homemade\" dumplings",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/362243826136565.jpg",
            "description": "Vareniki with mashed potatoes and fried chanterelles",
            "weight": "250 g",
            "discount": "5.7",
            "price": "4.5"
        },
        {
            "categoryId": 1,
            "name": "Soup",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/362243826136565.jpg",
            "description": "Potatoes, carrots, onions, green onions",
            "weight": "300 g",
            "discount": "",
            "price": "4.3"
        },
        {
            "categoryId": 2,
            "name": "Avocado salad with feta",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/1593325156801055.jpg",
            "description": "Ripe avocado, feta cheese, olives and spinach salad",
            "weight": "300 g",
            "discount": "",
            "price": "4.9"
        },
        {
            "categoryId": 2,
            "name": "Camembert salad",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/1593325156801055.jpg",
            "description": "Baked Camembert cheese with fresh vegetables",
            "weight": "300 g",
            "discount": "5",
            "price": "4.5"
        },
        {
            "categoryId": 3,
            "name": "Raspberry mousse",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/616985337965459.jpg",
            "description": "Raspberry mousse with cream and raspberry syrup",
            "weight": "150 g",
            "discount": "",
            "price": "3.25"
        }
    ]
};

const coffeeSizeData = [
    {
    "name": "xs",
    "value": "10"
    },
    {
    "name": "s",
    "value": "12"
    },
    {
    "name": "m",
    "value": "14"
    },
    {
    "name": "l",
    "value": "16"
    },
    {
    "name": "xl",
    "value": "18"
    }
]



const slider = document.querySelector('.slider')
const { categories, items } = model


/* ------------------------------------------------------------------ */
/*                      Fetching category data                        */
const categoryData = categories.map(cat => {
    return `
        <a id="" class="slider-item " href="#${cat.id}">${cat.name}</a>`
}
).join('')

slider.innerHTML = categoryData
// -------------------------------------------------------------------
/*                          Popup image                             */
const closeBtn = document.querySelector('.closebtn')
const popup = document.querySelector('.popup-image')
const popupImage = document.querySelector('.popup-image img')
const imageZoom = document.querySelector('.image-zoom')

function displayNone() {
    popup.style.display = 'none'
}

popup.addEventListener('click', displayNone)
closeBtn.addEventListener('click', displayNone)



document.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('product-image') || target.classList.contains('image-zoom')) {
        popup.style.display = 'block';
        popupImage.src = target.src
        popupImage.src = target.parentElement.firstElementChild.src
    }
})
// -----------------------------------------------------------------

const darkMode = document.querySelector('.dark')
const lightMode = document.querySelector('.light')

darkMode.addEventListener('click', () => {
    document.body.classList.add('dark-mode')
    darkMode.style.display = 'none'
    lightMode.style.display = 'block'
})

lightMode.addEventListener('click', () => {
    document.body.classList.remove('dark-mode')
    darkMode.style.display = 'block'
    lightMode.style.display = 'none'
})

// ------------------------------------------------------------------
//             Scrolling up and down navbar
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.remove('navbar-hidden');
    } else if(currentScroll == 0) {
        navbar.classList.remove('navbar-hidden');
    }
    else {
        // Scrolling up
        navbar.classList.add('navbar-hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// ------------------------------------------------------------------
/*                        Fetching menu data                       */
const menuCards = document.querySelector('.menu-cards')

const menuData = categories.map(category => `
    <section id=${category.id} class="">
      <h4 class="mb-4 py-2">${category.name}</h4>
      <div class="row">
        ${items.map(product => category.id == product.categoryId ? `
        <div id="${product.categoryId}" class="card-item col-md-6 mb-4">
            <div class="card-content d-flex align-items-center">
                <div class="ms-3">
                    <h5 class="product-name mb-0">${product.name}</h5>
                    <div class="coffee-size d-flex">
                        ${coffeeSizeData.map((sizes) => {if (sizes.name) {return `<img src="./assets/images/${sizes.name.toLocaleUpperCase()}.svg" alt="">`}}).join("")}
                    </div>
                    <div class="product-price d-flex">
                        <p class="mb-0 text-muted">7.00 ₼</p>
                        ${product.discount ? `<p class="mb-0 text-muted"><del>${product.discount} ₼</del></p>` : ""}
                    </div>
                </div>
                <img src="${product.image}" class="img img-fluid rounded" style="width: 100px; height: 80px;" alt="Espresso double">
            </div>
        </div>` : "").join("")}
        </div>
    </section>`

).join("")

menuCards.innerHTML = menuData

window.addEventListener('click', (e) => {
    if (e.target.src == "./assets/images/S.svg" ) {
        // console.log(e.target);
        alert("hello")
        
    }
})
 
const languageItem = document.querySelector('.language-item')
const languageOptions = document.querySelector('.language-options')
var clicked = true
languageItem.addEventListener('click', ()=> {
    if (clicked == true) {
        languageOptions.style.display = 'block'
        clicked = !clicked
    }
    else{
        languageOptions.style.display = 'none'
        clicked = !clicked
    }
})

const languageOptionItem = languageOptions.querySelectorAll('.language-item')
languageOptionItem[0].addEventListener('click', ()=>{
})

// ----------------------------------------------------------------------

const body = document.querySelector('body')
const seeMoreImage = document.querySelector('.see-more-image')
const seeMoreBack = document.querySelector('.see-more-back')
const seeMoreIMG = seeMoreImage.querySelector('img')

/**
 * 
 */
document.addEventListener('click', (e)=>{
    eTar = e.target
    // have to add card-content class to the parent element of the product name
    if (eTar.classList.contains("product-name")) {
        body.style.overflow = "hidden"
        seeMoreBack.style.display = "block"
        seeMoreIMG.src = eTar.parentElement.parentElement.lastElementChild.src
    }
    if (eTar.classList.contains("img")) {
        body.style.overflow = "hidden"
        seeMoreBack.style.display = "block"
        seeMoreIMG.src = eTar.src
    }
    else if (eTar.classList.contains("see-more-back")) {
        body.style.overflow = "auto"
        seeMoreBack.style.display = "none"
    }
})

// ----------------------------------------------------------------------
/**
 * Filter buttons for giving active class
 */
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const isActive = this.classList.contains('active');
    });
});

/**
 * Reset filter when click on reset button
 */
const resetFilter = document.querySelector('.reset')
const checkedİnputs = document.querySelectorAll('.dropdown-item input[type="checkbox"]')
const allergyDropdown = document.getElementById('allergyDropdown')


resetFilter.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.classList.remove('active')
    })
    checkedİnputs.forEach(input => {
        input.checked = false
        allergyDropdown.innerText = 'Seçin'
    })
})

/**
 * Apply filter
 */
const applyFilter = document.querySelector('.apply-filter')
applyFilter.addEventListener('click', ()=>{
    // filterModal.hide()
    // document.querySelectorAll('.filter-btn').forEach(button => {
    //     button.classList.remove('active')
    // })
})

// ----------------------------------------------------------------------





// ----------------------------------------------------------------------
/**
    * Dropdown with checkboxes
 */
checkedİnputs.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let selectedItems = [];
        document.querySelectorAll('.dropdown-item input[type="checkbox"]:checked').forEach(checkedItem => {
            selectedItems.push(checkedItem.value);
        });
        allergyDropdown.innerText = selectedItems.join(', ');
    });
});

checkedİnputs.forEach(checkbox => {
    checkbox.addEventListener('click', function(event) {
        event.stopPropagation();
        let selectedItems = [];
        document.querySelectorAll('.dropdown-item input[type="checkbox"]:checked').forEach(checkedItem => {
            selectedItems.push(checkedItem.value);
        });
        allergyDropdown.innerText = selectedItems.join(', ');
    });
});

// ----------------------------------------------------------------------

/**
 * Search input click
 */

const searchBtn = document.querySelector('.search');
const searchInputSec = document.querySelector('.search-input-section');

searchBtn.addEventListener('click', () => {
    searchInputSec.style.display = 'flex';
    body.style.overflow = 'hidden';
});

const closeSearch = document.querySelector('.search-back-btn');
closeSearch.addEventListener('click', () => {
    searchInputSec.style.display = 'none';
    body.style.overflow = 'auto';
    searchInput.value = '';
    document.querySelector('.search-result').innerHTML = '';
});

/**
 * Debounce function
 */
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Search logic with debouncing
 */
const searchInput = document.querySelector('.search-input input');

function performSearch(event) {
    const searchTerm = event.toLowerCase();
    const searchResultsDiv = document.querySelector('.search-result');

    if (searchTerm === '') {
        // Clear the search results if the search term is empty
        searchResultsDiv.innerHTML = '';
        return;
    }

    let searchResults = items.filter(item => item.name.toLowerCase().includes(searchTerm)).map(item => {
        return `
        <div class="search-result-item">
            <div class="entire-card"></div>
            <img src="${item.image}" alt="">
            <div class="search-result-item-info">
                <h5 class="fw-bold">${item.name}</h5>
                <p class="text-muted">${item.price} ₼</p>
            </div>
        </div>`;
    });
    searchResultsDiv.innerHTML = searchResults.join('');
    searchResults = [];
}
const debouncedSearch = debounce(() => performSearch(searchInput.value), 500);
searchInput.addEventListener('input', debouncedSearch);
//----------------------------------------------------------------------

window.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('entire-card')) {
        body.style.overflow = "hidden"
        seeMoreBack.style.display = "block"
        console.log(e.target.parentElement);
        
        // seeMoreIMG.src = eTar.parentElement.parentElement.lastElementChild.src
    }
});














// ----------------------------------------------------------------------
/**
 * Filter modal
 */

var filterModal = new bootstrap.Modal(document.getElementById('filterModal'), {
    keyboard: false
})
filterModal.show();
// ----------------------------------------------------------------------