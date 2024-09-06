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
const { categories, items } = model

/* ------------------------------------------------------------------ */
/*                      Fetching category data                        */
const categoryData = categories.map(cat => {
    return `<a id="slider-${cat.id}" class="slider-item" href="#${cat.id}">${cat.name}</a>`;
}).join('');

slider.innerHTML = categoryData

const sliderItems = document.querySelectorAll('.slider-item')

slider.addEventListener('click', (e) => {    
    sliderItems.forEach(item =>
    
        e.target.id == item.id ? item.classList.add("active") : item.classList.remove("active"));
});

/* ------------------------------------------------------------------ */

const sections = categories.map(cat => document.getElementById("slider-" + cat.id))


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     const sliderItem = document.querySelector(`#${entry.target.id}`);
//     console.log(entry.rootBounds.top);

//     // Check if the current section is intersecting
//     if (entry.isIntersecting) {
//       sliderItems.forEach(item => item.classList.remove('active'));
//       sliderItem.classList.add('active');
//     } 
//   })
//   console.log(entries[0].rootBounds.top);
  
// }, {
//   threshold: 1
// });

// Observe each section

// sections.forEach(section => {
//     observer.observe(section);
// });


// const sectionOfCategoty = document.querySelectorAll('section')

window.addEventListener('scroll', (e) => {
    e.preventDefault();
    console.log(pageYOffset);
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetWidth;
        // console.log(sectionTop);
        
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.id;
        }
    });

    sliderItems.forEach(item => {
        item.classList.remove('active');
        if (item.id === current) {
            item.classList.add('active');
        }
    });
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



// window.addEventListener('click', (e) => {
//     var etarget = e.target;
//     coffeeSizeData.map(svg => {
//         svgValue = svg.name.toLocaleUpperCase();        
//         if(etarget.src.includes("/" + svgValue)){
//             // console.log(etarget.classList);
//             etarget.classList.add('active-size')
//             `<div class="product-price d-flex">
//                 <p class="mb-0 text-muted">${product.price + svgValue} ₼</p>
//                 ${product.discount+svgValue ? `<p class="mb-0 text-muted"><del>${product.discount + sv} ₼</del></p>` : ""}
//             </div>`
//         }
//         else{

//         }
//     })
// })

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
    if (eTar.classList.contains("entire-card")) {
        const cardContent = eTar.parentElement; 
        const imgElementSrc = cardContent.querySelector('img').src; 
        body.style.overflow = "hidden"
        seeMoreBack.style.display = "block"
        seeMoreIMG.src = imgElementSrc
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