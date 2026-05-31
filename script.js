let cart = [];
let products = [
  { id: 1, name: "AfriNova X1 Pro", price: 480000, category: "smartphone", img: "https://picsum.photos/id/1015/400/300", rating: 4.8, reviews: 342, badge: "Meilleure Vente" },
  { id: 2, name: "SoundVerse ANC Pro", price: 135000, category: "audio", img: "https://picsum.photos/id/201/400/300", rating: 4.9, reviews: 521 },
  { id: 3, name: "Zulu Watch Ultra", price: 195000, category: "wearable", img: "https://picsum.photos/id/251/400/300", rating: 4.7, reviews: 203, badge: "Nouveau" },
  { id: 4, name: "SolarFlex 200W", price: 89000, category: "solar", img: "https://picsum.photos/id/180/400/300", rating: 4.6, reviews: 134 },
  { id: 5, name: "AfriDrone Mini", price: 750000, category: "solar", img: "https://picsum.photos/id/292/400/300", rating: 5.0, reviews: 89 }
];

function displayProducts(filteredProducts, containerId = 'products-grid') {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="\( {product.img}" alt=" \){product.name}">
      <div class="product-info">
        \( {product.badge ? `<span class="badge-small"> \){product.badge}</span>` : ''}
        <h3>${product.name}</h3>
        <div class="rating">★ \( {product.rating} ( \){product.reviews})</div>
        <div class="price">${product.price.toLocaleString('fr-FR')} XOF</div>
        <button class="add-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  
  updateCartCount();
  alert(`✅ ${product.name} ajouté au panier`);
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function toggleCart() {
  // Logique du panier (à compléter selon besoin)
  alert("Panier ouvert (version démo)");
}

function checkout() {
  alert("🎉 Commande confirmée ! Paiement Mobile Money simulé.");
  cart = [];
  updateCartCount();
}

function filterCategory(cat) {
  document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  if (cat === 'all') displayProducts(products);
  else displayProducts(products.filter(p => p.category === cat));
}

function filterProducts() {
  const term = document.getElementById('search-input').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  displayProducts(filtered);
}

function showSection(section) {
  document.getElementById('home').style.display = section === 'home' ? 'flex' : 'none';
  document.getElementById('shop').style.display = section === 'shop' ? 'block' : 'none';
}

// Initialisation
displayProducts(products);
displayProducts(products.slice(0, 3), 'flash-grid'); // Offres flash
showSection('home');