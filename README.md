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