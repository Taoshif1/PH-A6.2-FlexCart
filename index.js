// alert("Welcome to FlexCart!")

let cart = [];

const productContainer = document.getElementById("productContainer");
const categoryContainer = document.getElementById("categoryContainer");
const loader = document.getElementById("loader");
const cartCount = document.getElementById("cartCount");
const detailsModal = document.getElementById("detailsModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");

// challenge parts

// open modal functionality
const openDetailsModal = (product) => {
  modalImage.src = product.image;
  modalTitle.textContent = product.title;
  modalCategory.textContent = product.category;
  modalPrice.textContent = `$${product.price}`;
  modalRating.textContent = `⭐ ${product.rating.rate}`;
  modalDescription.textContent = product.description;

  detailsModal.classList.remove("hidden");
  detailsModal.classList.add("flex");
};

// close modal functionality
closeModal.addEventListener("click", () => {
  detailsModal.classList.add("hidden");
  detailsModal.classList.remove("flex");
});

//  Close when clicking outside
detailsModal.addEventListener("click", (e) => {
  if (e.target === detailsModal) {
    detailsModal.classList.add("hidden");
    detailsModal.classList.remove("flex");
  }
});

// cart count
const updateCartCount = () => {
  cartCount.textContent = cart.length;
};

// add to cart
const addToCart = (product) => {
  alert(`Added ${product.title} to cart!`);
  cart.push(product);
  updateCartCount();
  saveCartToLocalStorage();
};

// remove from cart
const removeFromCart = (id) => {
  alert(`${product.title} removed from cart!`);
  cart = cart.filter((item) => item.id !== id);
  updateCartCount();
  saveCartToLocalStorage();
};

// cart total calculation
const calculateTotal = () => {
  return cart.reduce((total, item) => total + item.price, 0);
};

// save & load from local storage
const saveCartToLocalStorage = () => {
  localStorage.setItem("flexCart", JSON.stringify(cart));
};
const loadCartFromLocalStorage = () => {
  const stored = localStorage.getItem("flexCart");
  if (stored) {
    cart = JSON.parse(stored);
    updateCartCount();
  }
};

// show loader
const showLoader = () => loader.classList.remove("hidden");
const hideLoader = () => loader.classList.add("hidden");

// Fetch all products
const fetchAllProducts = async () => {
  try {
    showLoader();

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    hideLoader();
  }
};

// Fetch all categories
const fetchAllCategories = async () => {
  try {
    showLoader();
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
    displayCategories(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
  } finally {
    hideLoader();
  }
};

// Display categories
const displayCategories = (categories) => {
  categoryContainer.innerHTML = "";

  // Add "All" category button
  const allCategoryBtn = document.createElement("button");
  allCategoryBtn.textContent = "All";
  allCategoryBtn.className =
    "px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition";
  allCategoryBtn.onclick = () => fetchAllProducts();
  categoryContainer.appendChild(allCategoryBtn);

  categories.forEach((category) => {
    const categoryBtn = document.createElement("button");
    categoryBtn.textContent = category;
    categoryBtn.className =
      "px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition";
    categoryBtn.onclick = () => fetchProductsByCategory(category);
    categoryContainer.appendChild(categoryBtn);
  });
};

// Fetch products by category
const fetchProductsByCategory = async (category) => {
  try {
    showLoader();
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await res.json();
    displayProducts(data);
  } catch (e) {
    console.error("Error fetching products by category:", e);
  } finally {
    hideLoader();
  }
};

// Display products
const displayProducts = (products) => {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "bg-white rounded-2xl shadow-md p-4 flex flex-col";

    productCard.innerHTML = `
      <img src="${product.image}" 
        alt="${product.title}" 
        class="h-40 object-contain mb-4" />

      <h3 class="font-semibold text-lg mb-2">
        ${product.title.slice(0, 40)}...
      </h3>

      <span class="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full mb-2 w-fit">
        ${product.category}
      </span>

      <p class="font-bold text-xl mb-2">$${product.price}</p>

      <p class="text-sm text-yellow-500 mb-4">
        ⭐ ${product.rating.rate}
      </p>

      <div class="mt-auto flex gap-3">
        <button class="details-btn flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Details
        </button>
        <button class="add-btn flex-1 bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">
          Add
        </button>
      </div>
    `;

    // Attach events safely
    const addBtn = productCard.querySelector(".add-btn");
    addBtn.addEventListener("click", () => {
      addToCart(product);
    });

    const detailsBtn = productCard.querySelector(".details-btn");
    detailsBtn.addEventListener("click", () => {
      openDetailsModal(product);
    });

    productContainer.appendChild(productCard);
  });
};

// Initialize
fetchAllCategories();
fetchAllProducts();
loadCartFromLocalStorage();
