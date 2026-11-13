import { useEffect, useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Velocity Home Jersey",
    category: "Jerseys",
    price: 18000,
    oldPrice: 22000,
    badge: "BESTSELLER",
    color: "Forest / Lime",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85",
    description:
      "A lightweight, breathable match-day jersey built to keep you cool through every minute. Finished with a relaxed athletic fit and soft, quick-dry fabric.",
  },
  {
    id: 2,
    name: "Phantom Pro Boots",
    category: "Boots",
    price: 55000,
    badge: "NEW DROP",
    color: "Emerald / Volt",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Take control of the pitch with a close-touch upper and responsive traction. Made for quick turns, confident strikes, and players who see the game differently.",
  },
  {
    id: 3,
    name: "Everyday Training Shorts",
    category: "Shorts",
    price: 10000,
    color: "Deep Green",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",
    description:
      "Easy-moving training shorts with a secure elastic waist, practical side pockets, and featherweight fabric that works just as hard as you do.",
  },
  {
    id: 4,
    name: "Flex Knit Joggers",
    category: "Joggers",
    price: 19000,
    badge: "FAN FAVOURITE",
    color: "Black / Emerald",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
    description:
      "Warm up, cool down, or head out. These tapered joggers pair a soft-touch feel with flexible stretch and a clean, all-day silhouette.",
  },
  {
    id: 5,
    name: "Core Performance Socks",
    category: "Socks",
    price: 5000,
    color: "White / Green",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=85",
    description:
      "A cushioned, stay-put fit with breathable panels where you need them most. Your new reliable pair for training, match day, and everything after.",
  },
  {
    id: 6,
    name: "Impact Shin Guards",
    category: "Protection",
    price: 8000,
    badge: "LIGHTWEIGHT",
    color: "Emerald / Black",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",
    description:
      "Low-profile, lightweight protection designed to stay comfortable and secure. A dependable essential for every competitive session.",
  },
  {
    id: 7,
    name: "Second Skin Base Layer",
    category: "Base layers",
    price: 14000,
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    description:
      "A smooth, supportive base layer with four-way stretch and a close-to-body fit. Designed for comfort under your kit without holding you back.",
  },
  {
    id: 8,
    name: "Grip Wristbands — 2 Pack",
    category: "Accessories",
    price: 4000,
    badge: "2-PACK",
    color: "Emerald / Purple",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    description:
      "A soft, absorbent pair that keeps sweat out of the way and your focus on the game. Comfortable stretch with a secure, no-slip feel.",
  },
  {
    id: 9,
    name: "Club Away Jersey",
    category: "Jerseys",
    price: 19000,
    color: "Purple / White",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85",
    description:
      "A fresh away-day look with a modern athletic cut. Lightweight fabric and clean detailing make this an easy favourite on and off the pitch.",
  },
  {
    id: 10,
    name: "Street Football Boots",
    category: "Boots",
    price: 45000,
    badge: "JUST IN",
    color: "White / Purple",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
    description:
      "Get a sure-footed feel on hard ground and turf with durable grip and a cushioned ride. Built for the pitch you actually play on.",
  },
  {
    id: 11,
    name: "Matchday Inner Shorts",
    category: "Base layers",
    price: 8500,
    color: "Black / Green",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",
    description:
      "Supportive stretch where it counts, with a lightweight feel that layers easily under your match shorts. Made to move with you.",
  },
  {
    id: 12,
    name: "Captain's Armband",
    category: "Accessories",
    price: 3500,
    color: "Purple / Emerald",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85",
    description:
      "Make your role official. A comfortable, adjustable captain's band with a bold finish that stands out from kickoff to the final whistle.",
  },
];

const categories = [
  "All gear",
  "Jerseys",
  "Boots",
  "Shorts",
  "Joggers",
  "Socks",
  "Protection",
  "Base layers",
  "Accessories",
];

const departments = [
  { number: "01", name: "Jerseys & kits", category: "Jerseys", note: "REP YOUR SIDE" },
  { number: "02", name: "Boots & cleats", category: "Boots", note: "OWN THE PITCH" },
  { number: "03", name: "Training gear", category: "Shorts", note: "MADE TO MOVE" },
  { number: "04", name: "Match essentials", category: "Accessories", note: "THE FINISHING TOUCH" },
];

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=90",
    alt: "Footballer ready for the game",
    caption: "THE EVERYDAY ATHLETE",
  },
  {
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=85",
    alt: "Football pitch ready for a match",
    caption: "ALL HEART. ALL GAME.",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Shot_putter%2C_University_of_Nebraska.jpg",
    alt: "University of Nebraska shot put athlete in 1942",
    caption: "POWER IN EVERY THROW",
  },
];

const money = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const paths = {
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    heart: <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.6 4.6 0 0 1 8.8-1.7 4.6 4.6 0 0 1 8.8 1.7Z" />,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    facebook: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
    twitter: <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.7 1 4.1 4.1 0 0 0-7 3.8 11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 18.5a11.7 11.7 0 0 0 17.9-9.9v-.5A8.4 8.4 0 0 0 22 5.9Z" />,
    whatsapp: <><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.9a8.5 8.5 0 1 1 16-3.9Z" /><path d="M8.2 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.3 1.6 2.2 2 .2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-1.9.6-.7-.1-1.6-.4-2.7-1-1.5-.8-2.5-2-3.2-3.1-.7-1.1-1-2.1-.9-2.7.1-.6.5-1.1.7-1.2Z" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Header({ cartCount, onCart, onSearch, searchOpen, searchTerm, setSearchTerm, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <div className="announcement">
        <span>GOOD GEAR. GOOD GAME.</span>
        <span className="announcement-center">Free delivery on orders over ₦50,000</span>
        <a href="tel:09061230710">Need a hand? 09061230710</a>
      </div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Maahir Sports home">
          MAAHIR<span> SPORTS</span><i>.</i>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("shop")}>Shop all</button>
          <button onClick={() => scrollTo("shop")}>New arrivals</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            onClick={onToggleTheme}
          >
            <Icon name={theme === "light" ? "moon" : "sun"} />
          </button>
          <button className="icon-button search-toggle" aria-label="Search products" onClick={onSearch}>
            <Icon name="search" />
          </button>
          <button className="icon-button bag-button" aria-label={`Open bag, ${cartCount} items`} onClick={onCart}>
            <Icon name="bag" />
            <span className="bag-count">{cartCount}</span>
          </button>
          <button
            className="icon-button mobile-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>
      {searchOpen && (
        <div className="search-bar">
          <Icon name="search" />
          <input
            autoFocus
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
            }}
            placeholder="Search jerseys, boots, training gear..."
            aria-label="Search products"
          />
          <button className="icon-button" aria-label="Close search" onClick={onSearch}>
            <Icon name="close" />
          </button>
        </div>
      )}
    </>
  );
}

function ProductCard({ product, onView, isSaved, onSave }) {
  return (
    <article className="product-card">
      <button className="product-image-button" onClick={() => onView(product)} aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </button>
      <button
        className={`save-button ${isSaved ? "is-saved" : ""}`}
        aria-label={isSaved ? `Remove ${product.name} from saved items` : `Save ${product.name}`}
        onClick={() => onSave(product.id)}
      >
        <Icon name="heart" size={18} />
      </button>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span>{product.color}</span></div>
        <button className="product-name" onClick={() => onView(product)}>{product.name}</button>
        <div className="product-price">
          <strong>{money(product.price)}</strong>
          {product.oldPrice && <del>{money(product.oldPrice)}</del>}
        </div>
      </div>
    </article>
  );
}

function ProductModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState("M");
  if (!product) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-product-name">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close product details"><Icon name="close" /></button>
        <div className="modal-image"><img src={product.image} alt={product.name} /></div>
        <div className="modal-details">
          <span className="eyebrow">{product.category} / MAAHIR SPORTS</span>
          <h2 id="modal-product-name">{product.name}</h2>
          <div className="modal-price">{money(product.price)}</div>
          <p>{product.description}</p>
          <div className="detail-label">Colour <span>{product.color}</span></div>
          <div className="size-heading"><span>Select size</span><button>Size guide</button></div>
          <div className="size-options">
            {["S", "M", "L", "XL", "XXL"].map((item) => (
              <button key={item} className={size === item ? "selected" : ""} onClick={() => setSize(item)}>{item}</button>
            ))}
          </div>
          <button className="button button-dark modal-add" onClick={() => onAdd(product, size)}>
            Add to bag <Icon name="arrow" size={18} />
          </button>
          <div className="delivery-note">✓ Secure checkout <span>✓ Easy 7-day returns</span></div>
        </div>
      </section>
    </div>
  );
}

function CartDrawer({ cart, onClose, onChangeQuantity }) {
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-heading">
          <div><span className="eyebrow">YOUR PICKS</span><h2 id="cart-title">Your bag <span>({items.reduce((sum, item) => sum + item.quantity, 0)})</span></h2></div>
          <button className="icon-button" aria-label="Close bag" onClick={onClose}><Icon name="close" /></button>
        </div>
        {items.length === 0 ? (
          <div className="empty-cart"><span className="empty-bag-icon"><Icon name="bag" size={28} /></span><h3>Your bag is on the bench.</h3><p>Find something that gets you game-ready.</p><button className="button button-dark" onClick={onClose}>Explore the store <Icon name="arrow" size={18} /></button></div>
        ) : (
          <>
            <p className="shipping-progress">{total >= 50000 ? "You unlocked free delivery!" : `You're ${money(50000 - total)} away from free delivery.`}</p>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={`${item.id}-${item.size}`}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-info"><h3>{item.name}</h3><span>Size: {item.size}</span><strong>{money(item.price)}</strong>
                    <div className="quantity-control">
                      <button aria-label={`Decrease ${item.name} quantity`} onClick={() => onChangeQuantity(item, -1)}><Icon name="minus" size={14} /></button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name} quantity`} onClick={() => onChangeQuantity(item, 1)}><Icon name="plus" size={14} /></button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => onChangeQuantity(item, -item.quantity)}>Remove</button>
                </article>
              ))}
            </div>
            <div className="cart-summary">
              <div><span>Subtotal</span><strong>{money(total)}</strong></div>
              <small>Delivery calculated at checkout.</small>
              <button className="button button-dark checkout-button" onClick={() => setCheckoutMessage("Checkout is ready to connect to your payment provider.")}>Continue to checkout <Icon name="arrow" size={18} /></button>
              {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("maahir-sports-theme") || "light");
  const [activeCategory, setActiveCategory] = useState("All gear");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [savedItems, setSavedItems] = useState([]);
  const [contactSent, setContactSent] = useState(false);
  const [toast, setToast] = useState("");
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    localStorage.setItem("maahir-sports-theme", theme);
  }, [theme]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesCategory = activeCategory === "All gear" || product.category === activeCategory;
      const matchesSearch = !term || `${product.name} ${product.category} ${product.color}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
    if (sortOrder === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortOrder === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [activeCategory, searchTerm, sortOrder]);

  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const goToShop = () => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };
  const addToCart = (product, size = "M") => {
    const key = `${product.id}-${size}`;
    setCart((current) => ({
      ...current,
      [key]: { ...product, size, quantity: (current[key]?.quantity || 0) + 1 },
    }));
    setSelectedProduct(null);
    setCartOpen(true);
    notify(`${product.name} added to your bag`);
  };
  const changeQuantity = (item, change) => {
    const key = `${item.id}-${item.size}`;
    setCart((current) => {
      const next = { ...current };
      const quantity = (next[key]?.quantity || 0) + change;
      if (quantity <= 0) delete next[key];
      else next[key] = { ...next[key], quantity };
      return next;
    });
  };
  const toggleSaved = (id) => {
    const isSaved = savedItems.includes(id);
    setSavedItems((current) => isSaved ? current.filter((item) => item !== id) : [...current, id]);
    notify(isSaved ? "Removed from your saved items" : "Saved for later");
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <Header
        cartCount={cartCount}
        onCart={() => setCartOpen(true)}
        onSearch={() => {
          setSearchOpen((open) => !open);
          if (searchOpen) setSearchTerm("");
        }}
        searchOpen={searchOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")}
      />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" /> MADE FOR YOUR GAME</div>
            <h1>Move like<br />you <span>mean it.</span></h1>
            <p>Good gear changes everything. Find your edge with football essentials built for the way you play.</p>
            <div className="hero-actions">
              <button className="button button-lime" onClick={goToShop}>Shop the collection <Icon name="arrow" size={18} /></button>
              <a className="text-link" href="#shop">Explore new arrivals <span>↘</span></a>
            </div>
            <div className="hero-proof"><div className="avatar-stack"><span>F</span><span>A</span><span>K</span><span>+</span></div><div><strong>Made for players</strong><small>From warm-up to last whistle.</small></div></div>
          </div>
          <div className="hero-visual">
            <img src={heroSlides[activeHeroSlide].image} alt={heroSlides[activeHeroSlide].alt} />
            <div className="hero-image-shade" />
            <div className="hero-sticker"><span>PLAY</span><strong>YOUR<br />WAY.</strong><i>★</i></div>
            <div className="hero-image-caption">
              <span aria-live="polite">{String(activeHeroSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span>
              <span>{heroSlides[activeHeroSlide].caption}</span>
            </div>
            <button
              className="hero-slide-button is-prev"
              aria-label="Previous hero slide"
              onClick={() => setActiveHeroSlide((activeHeroSlide - 1 + heroSlides.length) % heroSlides.length)}
            >
              <Icon name="arrow" size={19} />
            </button>
            <button
              className="hero-slide-button is-next"
              aria-label="Next hero slide"
              onClick={() => setActiveHeroSlide((activeHeroSlide + 1) % heroSlides.length)}
            >
              <Icon name="arrow" size={19} />
            </button>
          </div>
          <div className="hero-side-note">BUILT FOR EVERY VERSION OF YOU&nbsp; — &nbsp;BUILT FOR EVERY VERSION OF YOU&nbsp; — &nbsp;</div>
        </section>

        <section className="benefit-strip" aria-label="Store benefits">
          <div><span className="benefit-icon">✳</span><span>GEAR THAT GOES HARD</span></div>
          <div><span className="benefit-icon">↗</span><span>DELIVERY ACROSS NIGERIA</span></div>
          <div><span className="benefit-icon">◈</span><span>SECURE CHECKOUT</span></div>
          <div><span className="benefit-icon">↺</span><span>7-DAY EASY RETURNS</span></div>
        </section>

        <section className="departments section-wrap" aria-labelledby="departments-title">
          <div className="departments-heading">
            <span className="eyebrow">FIND YOUR NEXT FAVOURITE</span>
            <h2 id="departments-title">Shop your <span>game.</span></h2>
          </div>
          <div className="department-bars">
            {departments.map((department, index) => (
              <button
                className={`department-bar department-bar-${index + 1}`}
                key={department.category}
                onClick={() => {
                  setActiveCategory(department.category);
                  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="department-number">{department.number}</span>
                <span className="department-title">{department.name}</span>
                <span className="department-note">{department.note}</span>
                <span className="department-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="shop-section section-wrap" id="shop">
          <div className="section-heading">
            <div><span className="eyebrow">THE GOOD STUFF</span><h2>Kit up. <span>Show up.</span></h2></div>
            <p>Everything you need to play your game.<br />Nothing you don't.</p>
          </div>
          <div className="shop-toolbar">
            <div className="category-list" role="group" aria-label="Filter by category">
              {categories.map((category) => (
                <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>
            <label className="sort-control">Sort by
              <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} aria-label="Sort products">
                <option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name</option>
              </select>
            </label>
          </div>
          {searchTerm && <div className="search-result-label">Showing results for <strong>“{searchTerm}”</strong><button onClick={() => setSearchTerm("")}>Clear</button></div>}
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onView={setSelectedProduct} isSaved={savedItems.includes(product.id)} onSave={toggleSaved} />
            ))}
          </div>
          {filteredProducts.length === 0 && <div className="no-results"><h3>No gear found.</h3><p>Try another search or choose a different category.</p><button className="text-link" onClick={() => { setSearchTerm(""); setActiveCategory("All gear"); }}>Show all gear <span>↗</span></button></div>}
          <div className="shop-footer"><span>SHOWING {filteredProducts.length} OF {products.length} PRODUCTS</span><button className="button button-outline" onClick={() => { setActiveCategory("All gear"); setSearchTerm(""); }}>View all gear <Icon name="arrow" size={18} /></button></div>
        </section>

        <section className="community-banner">
          <div className="community-image"><img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=85" alt="Football pitch at golden hour" loading="lazy" /></div>
          <div className="community-copy"><span className="eyebrow">THE GAME IS YOURS</span><h2>For the love<br />of the <span>whole game.</span></h2><p>Early kick-offs. Last-minute winners. The people you play with. That's what it's all about. We're here for all of it.</p><button className="button button-lime" onClick={goToShop}>Find your next favourite <Icon name="arrow" size={18} /></button></div>
          <div className="community-orbit">MAAHIR SPORTS · MAAHIR SPORTS · MAAHIR SPORTS ·</div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy"><span className="eyebrow">WE'RE HERE FOR YOU</span><h2>Need a hand?<br /><span>We've got you.</span></h2><p>Questions about sizing, your order, or what to wear for match day? Drop us a message. We're real people who love the game too.</p>
            <a className="phone-link" href="tel:09061230710"><span className="phone-icon">↗</span><span><small>GIVE US A CALL</small><strong>09061230710</strong></span></a>
          </div>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setContactSent(true); event.currentTarget.reset(); }}>
            <div className="form-row"><label>Your name<input name="name" type="text" placeholder="How should we call you?" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label></div>
            <label>What can we help with?<select name="topic" defaultValue="" required><option value="" disabled>Choose a topic</option><option>Order question</option><option>Product & sizing</option><option>Delivery & returns</option><option>Something else</option></select></label>
            <label>Your message<textarea name="message" rows="4" placeholder="Tell us what's on your mind..." required /></label>
            <div className="form-submit"><button className="button button-dark" type="submit">Send your message <Icon name="arrow" size={18} /></button><small>We usually reply within one business day.</small></div>
            {contactSent && <p className="form-success" role="status">Thanks for reaching out — your message is ready for our team.</p>}
          </form>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark" href="#home">MAAHIR<span> SPORTS</span><i>.</i></a><p>Good gear. Good game.<br />Made for the love of sport.</p><div className="social-links">
            <a href="https://www.instagram.com/" aria-label="Instagram"><Icon name="instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Icon name="facebook" /></a><a href="https://www.x.com/" aria-label="X"><Icon name="twitter" /></a>
          </div></div>
          <div className="footer-links"><div><h3>SHOP</h3><a href="#shop">All gear</a><a href="#shop">Jerseys</a><a href="#shop">Boots</a><a href="#shop">Training essentials</a></div><div><h3>GOOD TO KNOW</h3><a href="#contact">Contact us</a><a href="#contact">Delivery & returns</a><a href="#contact">FAQs</a><a href="#contact">Size guide</a></div><div className="footer-contact"><h3>LET'S TALK</h3><a href="tel:09061230710">09061230710</a><a href="https://wa.me/2349061230710" target="_blank" rel="noreferrer">Chat on WhatsApp</a><span>Lagos, Nigeria</span></div></div>
        </div>
        <div className="footer-bottom"><span>© 2025 MAAHIR SPORTS. ALL GOOD.</span><span>MADE FOR THE LOVE OF THE GAME <b>✳</b></span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAdd={addToCart} />}
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onChangeQuantity={changeQuantity} />}
      {toast && <div className="toast" role="status">{toast}</div>}
      <a
        className="whatsapp-float"
        href="https://wa.me/2349061230710?text=Hello%20Maahir%20Sports%2C%20I%20need%20help%20with%20an%20order."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Maahir Sports on WhatsApp"
      >
        <Icon name="whatsapp" size={24} />
        <span>Chat with us</span>
      </a>
    </div>
  );
}

export default App;
