const applyFilter = document.querySelector('.apply-filter')
const coffeeData = JSON.parse("{\"categories\":[{\"id\":0,\"name\":\"BREAKFASTS\"}],\"items\":[{\"categoryId\":0,\"name\":\"Catfish on pumpkin puree\",\"image\":\"https://eu2.contabostorage.com/3f9b49d682d34ec79a0010ab121089ca:common-menu/1083/items/1cee8973-83d2-4a4d-9199-635fe6bfae97.png\",\"description\":\"Catfish fillet baked with young potatoes. Served with salad and pumpkin puree\",\"weight\":\"150\",\"discount\":\"3\",\"price\":\"12\",\"specials\":[{\"halal\":true},{\"kosher\":false},{\"vegetarian\":false},{\"vegan\":false},{\"hot\":false},{\"gluten\":false}]}]}")

const newItem = {
    categoryId: 0,
    itemID: 40,
    "name": "Hot and gluten free meal with milk",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS4LDoirxqwSv52CMVXh34qtrtXVnb7duoQ&s",
    "description": "Catfish fillet baked with young potatoes, milk. Served with salad and pumpkin puree",
    "weight": "250",
    "price": {
        "price": 0,
        "priced": 0,
        "xs": "10",
        "xsd": "17",
        "s": "11",
        "sd": "16",
        "m": "12",
        "md": "15",
        "l": "13",
        "ld": "14"
    },
    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        }
    ],
    "specials": {
        "halal": false,
        "kosher": false,
        "vegetarian": false,
        "vegan": false,
        "hot": true,
        "gluten": true
    }
}

const newItem1 = {
    categoryId: 2,
    itemID: 50,
    "name": "vegan et, coconut oil",
    "image": "https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "description": "Catfish fillet baked with young potatoes, coconut. Served with salad and pumpkin puree",
    "weight": "150",
    "price": {
        "price": 0,
        "priced": 0,
        "xs": "10",
        "xsd": "17",
        "s": "11",
        "sd": "16",
        "m": "12",
        "md": "15",
        "l": "13",
        "ld": "14",
        "xl": "14",
        "xld": "16"
    },
    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        },
        {
            "name": "Add-on 3",
            "price": "25"
        },
        {
            "name": "Add-on 4",
            "price": "30"
        }
    ],
    "specials": {
        "halal": false,
        "kosher": false,
        "vegetarian": false,
        "vegan": true,
        "hot": false,
        "gluten": false
    }
}

const newItem2 = {
    categoryId: 1,
    itemID: 60,
    name: "Meal for Kosher, peanut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS4LDoirxqwSv52CMVXh34qtrtXVnb7duoQ&s",
    description: "A delicious salad with peanut, pineapple, x, y, and coconut",
    weight: "250",
    "price": {
        "price": 3,
        "priced": 1234,
        // "xs": "10",
        // "xsd": "17",
        // "s": "11",
        // "sd": "16",
        // "m": "12",
        // "md": "15",
        // "l": "13",
        // "ld": "14",
        // "xl": "14",
        // "xld": "16"
    },

    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        },
        {
            "name": "Add-on 3",
            "price": "25"
        },
        {
            "name": "Add-on 4",
            "price": "30"
        }
    ],
    "specials": {
        "halal": false,
        "kosher": true,
        "vegetarian": false,
        "vegan": false,
        "hot": false,
        "gluten": false
    }
};

const newItem3 = {
    categoryId: 3,
    itemID: 70,
    name: "vegetarian meal, sugar syrop",
    image: "https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A tasty meal with sugar syrop, apple, banana, blabla",
    weight: "200",
    "price": {
        "price": 0,
        "priced": 0,
        "xs": "10",
        "xsd": "17",
        "s": "11",
        "sd": "16",
        "m": "12",
        "md": "15",
        "l": "13",
        "ld": "14",
        "xl": "14",
        "xld": "16"
    },
    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        },
        {
            "name": "Add-on 3",
            "price": "30"
        }
    ],
    "specials": {
        "halal": false,
        "kosher": false,
        "vegetarian": true,
        "vegan": false,
        "hot": false,
        "gluten": false
    }
};

const newItem4 = {
    categoryId: 2,
    itemID: 80,
    name: "cookies gluten free, sugar",
    image: "https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A tasty meal with sugar syrop, apple, banana, coconut oil",
    weight: "200",
    "price": {
        "price": 0,
        "priced": 0,
        "xs": "10",
        "xsd": "17",
        "s": "11",
        "sd": "16",
        "m": "12",
        "md": "15",
        "l": "1",
        "ld": "14",
        "xl": "23",
        "xld": "39"
    },
    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        },
        {
            "name": "Add-on 3",
            "price": "25"
        },
        {
            "name": "Add-on 4",
            "price": "30"
        },
        {
            "name": "Add-on 5",
            "price": "35"
        },
        {
            "name": "Add-on 6",
            "price": "40"
        }
    ],
    "specials": {
        "halal": false,
        "kosher": false,
        "vegetarian": false,
        "vegan": false,
        "hot": false,
        "gluten": true
    }
};

const newItem5 = {
    categoryId: 4,
    itemID: 90,
    name: " halal kolbasa, egg",
    image: "https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A tasty meal with egg, apple, banana, blabla",
    weight: "200",
    "price": {
        "price": 0,
        "priced": 0,
        "xs": "10",
        "xsd": "17",
        "s": "11",
        "sd": "16",
        "m": "12",
        "md": "15",
        "l": "1",
        "ld": "14",
        "xl": "23",
        "xld": "39"
    },
    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        },
        {
            "name": "Add-on 3",
            "price": "25"
        },
        {
            "name": "Add-on 4",
            "price": "30"
        }
    ],
    "specials": {
        "halal": true,
        "kosher": false,
        "vegetarian": false,
        "vegan": false,
        "hot": false,
        "gluten": false
    }
};

const newItem6 = {
    categoryId: 3,
    itemID: 100,
    name: "hot new item with milk, egg",
    image: "https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A tasty with egg, sugar, blabla",
    weight: "200",
    "price": {
        "price": 0,
        "priced": 0,
        "xs": "10",
        "xsd": "17",
        "s": "11",
        "sd": "16",
        "m": "12",
        "md": "15",
        "l": "1",
        "ld": "14",
        "xl": "23",
        "xld": "39"
    },
    "addons": [
        {
            "name": "Add-on 1",
            "price": "10"
        },
        {
            "name": "Add-on 2",
            "price": "20"
        },
        {
            "name": "Add-on 3",
            "price": "25"
        },
        {
            "name": "Add-on 4",
            "price": "30"
        }
    ],
    "specials": {
        "halal": true,
        "kosher": false,
        "vegetarian": false,
        "vegan": false,
        "hot": true,
        "gluten": false
    }
};

const newcategory = {
    id: 1,
    name: "Salads"
}

const newcategory1 = {
    id: 2,
    name: "Deserts"
}

const newcategory2 = {
    id: 3,
    name: "Drinks"
}

const newcategory3 = {
    id: 4,
    name: "Snacks"
}

coffeeData.items.unshift(newItem, newItem1, newItem2, newItem3, newItem4, newItem5);
coffeeData.items.pop()
coffeeData.categories.push(newcategory, newcategory1, newcategory2, newcategory3)
console.log(coffeeData);

const parsed = JSON.parse("{\"categories\":[{\"id\":0,\"name\":\"BREAKFASTS (8 AM - 10 AM)\"},{\"id\":1,\"name\":\"Banana\"}],\"items\":[{\"id\":0,\"categoryId\":0,\"name\":\"Tomato\",\"image\":\"https://eu2.contabostorage.com/3f9b49d682d34ec79a0010ab121089ca:common-menu/1083/items/3db5fe4d-307d-4370-9fed-084e95e990ce.png\",\"description\":\"1\",\"weight\":\"105\",\"price\":{\"price\":0,\"priced\":0,\"xs\":\"1\",\"s\":\"2\",\"m\":\"2\",\"l\":\"3\",\"xl\":\"4\"},\"addons\":[],\"specials\":{\"halal\":true,\"kosher\":false,\"vegetarian\":false,\"vegan\":false,\"hot\":true,\"gluten\":false}},{\"id\":1,\"categoryId\":1,\"name\":\"Catfish on pumpkin puree\",\"image\":\"https://eu2.contabostorage.com/3f9b49d682d34ec79a0010ab121089ca:common-menu/1083/items/e4702f14-91cf-4654-a022-3fc7b9b1885d.png\",\"description\":\"Catfish fillet baked with young potatoes. Served with salad and pumpkin puree\",\"weight\":\"4\",\"price\":{\"price\":\"10\",\"priced\":\"3\",\"xs\":0,\"xsd\":0,\"s\":0,\"sd\":0,\"m\":0,\"md\":0,\"l\":0,\"ld\":0,\"xl\":0,\"xld\":0},\"addons\":[],\"specials\":{\"halal\":false,\"kosher\":false,\"vegetarian\":true,\"vegan\":false,\"hot\":true,\"gluten\":false}}]}")
// console.log(parsed);

const allergies = ['Peanut', 'Gluten', 'Milk', 'Soy', 'Egg', 'Fish', 'Coconut', 'Wheat', 'Sesame', 'Sugar', 'Mustard', 'Celery']
/* ------------------------------------------------------------------ */
/*                      Fetching category data                        */

const slider = document.querySelector('.slider')
const menuCards = document.querySelector('.menu-cards')
const { categories, items } = coffeeData
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

const sliderPlace = document.querySelector('.slider-place')
window.addEventListener('scroll', () => {
    if (sliderPlace.getBoundingClientRect().top <= 0) {
        slider.classList.add('slider-on-the-top')
        slider.style.zIndex = '100000'
        document.querySelector('main').style.paddingTop = '40px'
    }
    else {
        slider.classList.remove('slider-on-the-top')
        document.querySelector('main').style.paddingTop = '0px'
    }
})

// -------------------------------------------------------------------
/*                          Popup image                             */
const closeBtn = document.querySelector('.closebtn')
const popup = document.querySelector('.popup-image')
const popupImage = document.querySelector('.popup-image img')

function displayNone() {
    popup.style.display = 'none'
}

popup.addEventListener('click', displayNone)
closeBtn.addEventListener('click', displayNone)

document.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('product-image')) {
        popup.style.display = 'block';
        popupImage.src = target.style.backgroundImage.slice(5, -2)
    }
})

// ------------------------------------------------------------------
/*                        Fetching menu data                       */

function fetchingMenuData(category, item) {
    document.querySelector('.slider').innerHTML = category.map(cat => {
        return `<a id="slider-${cat.id}" class="slider-item" href="#${cat.id}">${cat.name}</a>`;
    }).join('');

    document.querySelector('.menu-cards').innerHTML = category.map(category => `
        <section id=${category.id} class="">
          <h4 class="mb-4 py-2">${category.name}</h4>
          <div class="row">
            ${item.map(product => category.id == product.categoryId ? `
            <div class="card-item col-md-6 mb-4">
                <div class="card-content d-flex align-items-center">
                    <div id="${product.itemID}" class="entire-card"></div>
                    <div class="ms-3">
                        <h5 class="product-name mb-0">${product.name}</h5>
                        <div class="product-price d-flex">
                            <p class="mb-0 text-muted">${product.price.price !== 0 ? product.price.price : product.price.xs} ₼</p>
                            ${product.price.priced !== 0 ? `<p class="mb-0 text-muted"><del>${product.price.priced} ₼</del></p>` : `<p class="mb-0 text-muted"><del>${product.price.xsd} ₼</del></p>`}
                        </div>
                    </div>
                    <img src="${product.image}" class="img img-fluid rounded" style="width: 100px; height: 80px;" alt="Espresso double">
                </div>
            </div>` : "").join("")}
            </div>
        </section>`
    
    ).join("")
}
fetchingMenuData(categories, items)

// ------------------------------------------------------------------//
//              to add active class with scrolling                   //

window.addEventListener('scroll', () => {
    const sectionHeadings = menuCards.querySelectorAll('section');
    const category = document.querySelectorAll('.slider-item');
    
    const options = {
        threshold: 0.9
    }

    const observer = new IntersectionObserver((entries) => {
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


// -------------------------------------------------------------------- //
//                 to open seeMorePopup when click on card              //

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
        let selectedItem = items.filter(item => item.itemID == parseInt(eTar.id))[0]
        const sizesArray = ['xs', 's', 'm', 'l', 'xl']
        const allSizes = Object.keys(selectedItem.price).filter(key => sizesArray.includes(key))
        let addons = selectedItem.addons.map(addon => {
            return `
            <div class="addons type-card d-flex justify-content-between align-items-center">
                <div class="cup-description d-flex justify-content-start align-items-center">
                    <img src="./assets/images/done.svg" width="30px" height="30px" alt="">
                    <span>${addon.name}</span>
                </div>
                <div class="price-of-cup d-flex justify-content-start align-items-center">
                    <span>${addon.price} ₼</span>
                </div>
            </div>`
         }).join('')
        document.querySelector('.type-place').innerHTML += addons
        // --------------------------------------------
        const sizeItem = allSizes.map(size => {
            return `<div class="size-card d-flex justify-content-between align-items-center">
                <div class="cup-description d-flex justify-content-start align-items-center">
                    <img src="./assets/images/${size.toLocaleUpperCase()}.svg" width="30px" height="30px" alt="">
                    <b>${size.toLocaleUpperCase()}</b>
                    <span>230ml</span>
                </div>
                <div class="price-of-cup d-flex justify-content-start align-items-center">
                    <span>${selectedItem.price[size]} ₼</span>
                </div>
            </div>`
        }).join('')
        document.querySelector('.size-place').innerHTML += sizeItem
        // --------------------------------------------
    }
    else if (eTar.classList.contains("see-more-back") || eTar.classList.contains("close-seeMore")) {
        body.style.overflow = "auto"
        seeMoreBack.style.display = "none"
        document.querySelector('.type-place').innerHTML = '<h5 class="fw-bold">Coffee type</h5>'
        document.querySelector('.size-place').innerHTML = '<h5 class="fw-bold">Size</h5>'
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

allergies.forEach(allergy => {
    let i = allergies.indexOf(allergy)
    document.querySelector('.dropdown-menu').innerHTML += `
    <li><label class="dropdown-item" for="${allergy.toLocaleLowerCase() + i}"><input type="checkbox" id="${allergy.toLocaleLowerCase() + i}" name="${allergy.toLocaleLowerCase() + i}" 
        value="${allergy}">${allergy}</label></li>`
})

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
let selectedItems = [];
checkedİnputs.forEach(checkbox => {
    checkbox.addEventListener('click', function(event) {
        event.stopPropagation();
        selectedItems = [];
        document.querySelectorAll('.dropdown-item input[type="checkbox"]:checked').forEach(checkedItem => {
            selectedItems.push(checkedItem.value);
        });
        allergyDropdown.innerText = selectedItems.join(', ');
        if (selectedItems.length === 0) {
            allergyDropdown.innerText = 'Seçin';
        }
    });
});

applyFilter.addEventListener('click', ()=>{                                                                                                                                                        
    const  { categories, items } = coffeeData;
    const activeFilters = Array.from(document.querySelectorAll('.filter-btn.active')).map(button => button.dataset.filter);
    
    let newFilteredItem = [];
    let newFilteredCategory = [];

    items.filter(item => {
        activeFilters.map(filter => {
            if (item.specials[filter.toLowerCase()] == true) {
                if (!newFilteredItem.includes(item)) {
                    let matchesAllergy = selectedItems.some(allergy => {
                        return item.description.toLowerCase().includes(allergy.toLowerCase());
                    });
                    if (!matchesAllergy) {
                        newFilteredItem.push(item);
                        categories.map(category => {
                            if (category.id == item.categoryId) {
                                if (!newFilteredCategory.includes(category)) {
                                    newFilteredCategory.push(category);
                                }
                            }
                        });
                    }
                }
            }
        });
    });
    if (newFilteredItem.length === 0) {
        menuCards.innerHTML = '<div class="d-flex align-items-center justify-content-center"><img src="https://www.new4you.in/img/no_products_found.png" alt=""></div>'
        slider.innerHTML = '';
    }
    else{
        fetchingMenuData(newFilteredCategory, newFilteredItem)
    }
    if (activeFilters.length == 0) {
        fetchingMenuData(categories, items)
    }
})
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
let searchResultItems = [];
function performSearch(event) {
    const searchTerm = event.toLowerCase();
    const searchResultsDiv = document.querySelector('.search-result');

    if (searchTerm === '') {
        searchResultsDiv.innerHTML = '';
        return;
    }

    searchResultItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
    
    let searchResults = searchResultItems.map(item => {
        return `
        <div class="search-result-item">
            <div class="entire-card" data-id="${item.itemID}"></div>
            <img src="${item.image}" alt="">
            <div class="search-result-item-info">
                <h5 class="fw-bold">${item.name}</h5>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <p >${item.price["xs"]} ₼</p>
                    ${item.price.xsd ? `<p class="text-muted"><del>${item.price.xsd} ₼</del></p>` : ""}
                </div>
            </div>
        </div>`;
    });
    searchResultsDiv.innerHTML = searchResults.join('');
    searchResults = [];
}
const debouncedSearch = debounce(() => performSearch(searchInput.value), 500);
searchInput.addEventListener('input', debouncedSearch);
//----------------------------------------------------------------------

/**
 * Filter modal
 */

document.addEventListener('DOMContentLoaded', (event) => {
    var filterModal = new bootstrap.Modal(document.getElementById('filterModal'), {
        keyboard: false
    });
    filterModal.hide();

    document.querySelector('.filter').addEventListener('click', () => {
        filterModal.show();
    });
});