// alert("Welcome to FlexCart!")

const productContainer = document.getElementById("productContainer");
const categoryContainer = document.getElementById("categoryContainer");
const loader = document.getElementById("loader");

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
        <button class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Details
        </button>
        <button class="flex-1 bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">
          Add
        </button>
      </div>
    `;
    productContainer.appendChild(productCard);
  });
};

// Initialize
fetchAllCategories();
fetchAllProducts();
