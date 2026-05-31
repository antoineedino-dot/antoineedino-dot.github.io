<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exoverse - Tech Premium Afrique</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet">
</head>
<body>
  <!-- HEADER -->
  <header>
    <div class="top-bar">
      <p>Livraison rapide partout en Afrique • Paiement Mobile Money sécurisé</p>
    </div>
    <div class="container header">
      <div class="logo">EXOVERSE</div>
      
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Rechercher un smartphone, écouteurs, drone..." onkeyup="filterProducts()">
        <i class="fas fa-search"></i>
      </div>

      <div class="header-actions">
        <button onclick="toggleWishlist()" class="icon-btn"><i class="fas fa-heart"></i></button>
        <button onclick="toggleCart()" class="icon-btn">
          <i class="fas fa-shopping-cart"></i>
          <span id="cart-count" class="badge">0</span>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>La Technologie Africaine<br>au Meilleur Prix</h1>
      <p class="subtitle">Qualité premium • Innovation locale • Livraison rapide</p>
      <button onclick="showSection('shop')" class="cta-btn">Découvrir la boutique</button>
    </div>
  </section>

  <!-- OFFRES FLASH -->
  <section class="flash-deals">
    <div class="container">
      <h2>🔥 Offres Flash du Jour</h2>
      <div class="products-grid" id="flash-grid"></div>
    </div>
  </section>

  <!-- BOUTIQUE -->
  <section id="shop" class="shop-section">
    <div class="container">
      <h2 class="section-title">Toute la Tech Africaine</h2>
      
      <div class="filters">
        <button onclick="filterCategory('all')" class="active">Tous</button>
        <button onclick="filterCategory('smartphone')">Smartphones</button>
        <button onclick="filterCategory('audio')">Audio</button>
        <button onclick="filterCategory('wearable')">Wearables</button>
        <button onclick="filterCategory('solar')">Solaire</button>
      </div>

      <div class="products-grid" id="products-grid"></div>
    </div>
  </section>

  <!-- PRODUCT MODAL -->
  <div id="product-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">×</span>
      <div id="modal-body" class="modal-body"></div>
    </div>
  </div>

  <!-- PANIER -->
  <div id="cart-sidebar" class="cart-sidebar">
    <div class="cart-header">
      <h2>Votre Panier</h2>
      <span onclick="toggleCart()">×</span>
    </div>
    <div id="cart-items"></div>
    <div class="cart-total">
      Total : <span id="cart-total">0</span> XOF
    </div>
    <button onclick="checkout()" class="checkout-btn">Passer à la caisse • Mobile Money</button>
  </div>

  <footer>
    <div class="container">
      <p>© 2026 Exoverse • Paiement sécurisé • Garantie 1 an • Service client 24/7</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', system-ui, sans-serif; background: #0a0a0a; color: #eee; }

.container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }

.top-bar {
  background: #00cc77;
  color: black;
  text-align: center;
  padding: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

header { background: #111; position: sticky; top: 0; z-index: 100; }
.logo { font-size: 2.1rem; font-weight: 800; color: #00ff9d; }

.search-bar {
  position: relative;
  width: 420px;
}
.search-bar input {
  width: 100%;
  padding: 14px 20px 14px 50px;
  border: none;
  border-radius: 50px;
  background: #1f1f1f;
  color: white;
  font-size: 1rem;
}
.search-bar i { position: absolute; left: 20px; top: 14px; color: #888; }

.hero {
  height: 75vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://picsum.photos/id/1015/2000/1200') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 { font-size: 3.6rem; margin-bottom: 12px; }
.subtitle { font-size: 1.25rem; color: #ccc; }

.cta-btn {
  background: #00ff9d;
  color: black;
  padding: 16px 50px;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.product-card {
  background: #181818;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 255, 157, 0.2);
}

.product-card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.product-info { padding: 16px; }
.product-info h3 { font-size: 1.1rem; margin-bottom: 6px; }
.rating { color: #ffd700; font-size: 0.95rem; }
.price { font-size: 1.45rem; color: #00ff9d; font-weight: bold; margin: 8px 0; }

.add-btn {
  width: 100%;
  padding: 12px;
  background: #00ff9d;
  color: black;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
}

/* Modal, Cart, etc. */
.modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 200; align-items: center; justify-content: center; }
.modal-content { background: #181818; width: 90%; max-width: 700px; border-radius: 16px; padding: 25px; }

.checkout-btn {
  width: 100%;
  padding: 18px;
  background: #00ff9d;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  margin-top: 15px;
  cursor: pointer;
}


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


