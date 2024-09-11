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
            "discount": "8.19",
            "price": "6.99"
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
const menuCards = document.querySelector('.menu-cards')
const { categories, items } = model

/* ------------------------------------------------------------------ */
/*                      Fetching category data                        */
const categoryData = categories.map(cat => {
    return `<a id="slider-${cat.id}" class="slider-item" href="#${cat.id}">${cat.name}</a>`;
}).join('');

slider.innerHTML = categoryData

const sliderItems = document.querySelectorAll('.slider-item')

// ------------------------------------------------------------------- //
//                      Slider active class                           //
slider.addEventListener('click', (e) => {    
    sliderItems.forEach(item =>
        e.target.id == item.id ? item.classList.add("active") : item.classList.remove("active"));
});


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
        popupImage.src = target.style.backgroundImage.slice(5, -2)
    }
})

// -----------------------------------------------------------------
/*                      Dark and light mode                        */
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

const menuData = categories.map(category => `
    <section id=${category.id} class="">
      <h4 class="mb-4 py-2">${category.name}</h4>
      <div class="row">
        ${items.map(product => category.id == product.categoryId ? `
        <div id="${product.categoryId}" class="card-item col-md-6 mb-4">
            <div class="card-content d-flex align-items-center">
                <div class="entire-card"></div>
                <div class="ms-3">
                    <h5 class="product-name mb-0">${product.name}</h5>
                    <div class="product-price d-flex">
                        <p class="mb-0 text-muted">${product.price} ₼</p>
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

// ------------------------------------------------------------------//
//              to add active class with scrolling                   //

window.addEventListener('scroll', () => {
    const sectionHeadings = menuCards.querySelectorAll('section');
    const category = document.querySelectorAll('.slider-item');
    
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                category.forEach(section => section.classList.remove('active'));

                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                activeLink.classList.add('active');
            }
        });
    }, options);

    sectionHeadings.forEach(heading => observer.observe(heading));
});

// ------------------------------------------------------------------//
//              adding Cup size data to seeMorePopup                 //

const fetchingSizeData = coffeeSizeData.map(svg => {
    return `
    <div class="size-card d-flex justify-content-between align-items-center">
        <div class="cup-description d-flex justify-content-start align-items-center">
            <img src="./assets/images/${svg.name}.svg" width="30px" height="30px" alt="">
            <b>${svg.name.toLocaleUpperCase()}</b>
            <span>230ml</span>
        </div>
        <div class="price-of-cup d-flex justify-content-start align-items-center">
            <span>3.99 ₼</span>
        </div>
    </div>`
})

const sizePlace = document.querySelector('.size-place')
sizePlace.innerHTML += fetchingSizeData.join('')


// ------------------------------------------------------------------

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
    // languageItem.innerHTML = 'EN'
    // languageOptions.style.display = 'none'
})


// ----------------------------------------------------------------------
//                 to open seeMorePopup when click on card               //

const body = document.querySelector('body')
const seeMoreImage = document.querySelector('.see-more-image')
const seeMoreBack = document.querySelector('.see-more-back')
const seeMoreIMG = document.querySelector('.see-more-image')


document.addEventListener('click', (e)=>{
    eTar = e.target
    if (eTar.classList.contains("entire-card")) {
        const cardContent = eTar.parentElement; 
        const imgElementSrc = cardContent.querySelector('img').src; 
        body.style.overflow = "hidden"
        seeMoreBack.style.display = "block"
        seeMoreIMG.style.backgroundImage = `url("${imgElementSrc}")`;        
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
const coffeeData = JSON.parse("{\"categories\":[{\"id\":0,\"name\":\"BREAKFASTS (8 AM - 10 AM)\"}],\"items\":[{\"categoryId\":0,\"name\":\"Catfish on pumpkin puree\",\"image\":\"https://eu2.contabostorage.com/3f9b49d682d34ec79a0010ab121089ca:common-menu/1083/items/1cee8973-83d2-4a4d-9199-635fe6bfae97.png\",\"description\":\"Catfish fillet baked with young potatoes. Served with salad and pumpkin puree\",\"weight\":\"150\",\"discount\":\"3\",\"price\":\"12\",\"specials\":[{\"halal\":true},{\"kosher\":false},{\"vegetarian\":false},{\"vegan\":false},{\"hot\":false},{\"gluten\":false}]}]}")
// console.log(coffeeData);

// function applyFilterToMenuData(x) {
//     const specials = coffeeData.items[0].specials.map(special => {
//         return Object.keys(special).map(key => {
//             return special[key] ? key : '';
//         }).join('');
//     }).join('');
//     return specials
// }
// applyFilterToMenuData()


applyFilter.addEventListener('click', ()=>{
    const  { categories, items} = coffeeData
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.classList.remove('active')
    })
    // checkedİnputs.forEach(input => {
    //     if (input.checed == false) {
    //         allergyDropdown.innerText = 'Seçin'
    //     }
    // })

    const activeFilters = Array.from(document.querySelectorAll('.filter-btn.active')).map(button => button.dataset.filter);

    const filteredItems = coffeeData.items.filter(item => {
        return activeFilters.every(filter => item.specials.some(special => special[filter]));
    });

    const appliedFilterData = categories.map(category => `
        <section id=${category.id} class="">
          <h4 class="mb-4 py-2">${category.name}</h4>
          <div class="row">
            ${items.map(product => category.id == product.categoryId ? `
            <div id="${product.categoryId}" class="card-item col-md-6 mb-4">
                <div class="card-content d-flex align-items-center">
                    <div class="entire-card"></div>
                    <div class="ms-3">
                        <h5 class="product-name mb-0">${product.name}</h5>
                        <div class="product-price d-flex">
                            <p class="mb-0 text-muted">${product.price} ₼</p>
                            ${product.discount ? `<p class="mb-0 text-muted"><del>${product.discount} ₼</del></p>` : ""}
                        </div>
                    </div>
                    <img src="${product.image}" class="img img-fluid rounded" style="width: 100px; height: 80px;" alt="">
                </div>
            </div>` : "").join("")}
            </div>
        </section>`
    
    ).join("")
    
    menuCards.innerHTML = appliedFilterData
})

// ----------------------------------------------------------------------





// ----------------------------------------------------------------------
/**
    * Dropdown with checkboxes
 */

// function checked(addCheckedInput) {
//     checkedİnputs.forEach(checkbox => {
//         addCheckedInput = function() {
//             if (checkbox.checked) {
//                 // console.log(checkbox.value);
//                 return checkbox.value
//             }
//         }        
        
//         checkbox.addEventListener('change', function() {
//             let selectedItems = [];
//             document.querySelectorAll('.dropdown-item input[type="checkbox"]:checked').forEach(checkedItem => {
//                 selectedItems.push(checkedItem.value);
//             });
//             allergyDropdown.innerText = selectedItems.join(', ');
//             if (selectedItems.length === 0) {
//                 allergyDropdown.innerText = 'Seçin';
//             }
//         });
//     });
// }

// console.log(checked(addCheckedInput));



// checkedİnputs.forEach(checkbox => {
//     checkbox.addEventListener('click', function(event) {
//         event.stopPropagation();
//         let selectedItems = [];
//         document.querySelectorAll('.dropdown-item input[type="checkbox"]:checked').forEach(checkedItem => {
//             selectedItems.push(checkedItem.value);
//         });
//         allergyDropdown.innerText = selectedItems.join(', ');
//         if (selectedItems.length === 0) {
//             allergyDropdown.innerText = 'Seçin';
//         }
//     });
// });

// ----------------------------------------------------------------------


class CheckboxManager {
    constructor(checkedInputs, dropdown) {
        this.checkedInputs = checkedInputs;
        this.dropdown = dropdown;
    }

    initialize() {
        this.checkedInputs.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateDropdown();
            });
        });
    }

    updateDropdown() {
        let selectedItems = this.getCheckedValues();
        this.dropdown.innerText = selectedItems.join(', ');
        if (selectedItems.length === 0) {
            this.dropdown.innerText = 'Seçin';
        }
    }

    getCheckedValues() {
        let selectedItems = [];
        document.querySelectorAll('.dropdown-item input[type="checkbox"]:checked').forEach(checkedItem => {
            selectedItems.push(checkedItem.value);
        });
        return selectedItems;
    }
}

const checkedInputs = document.querySelectorAll('.dropdown-item input[type="checkbox"]');
const checkboxManager = new CheckboxManager(checkedInputs, allergyDropdown);
checkboxManager.initialize();

const valuseOfInput = checkboxManager.getCheckedValues()
console.log(valuseOfInput);



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
    if (e.target.classList.contains('entire-card')) {
        body.style.overflow = "hidden"
        seeMoreBack.style.display = "block"
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