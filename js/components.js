class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="navbar">
        <div class="brand">
        <a href="https://www.psithyros.com/">
        <img
            src="assets/psithyros-logo-light-2026.png"
            alt="Site logo"
            class="logo logo-light"
        />
        <img
            src="assets/psithyros-logo-dark-2026.png"
            alt="Site logo"
            class="logo logo-dark"
        />
        </a>
        <span class="brand-text">psithyros</span>
        </div>

        <nav class="nav-links" id="navLinks">
        <a href="#">Products</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        </nav>

        <div class="nav-controls">
        <button class="theme-toggle" id="themeToggle">Theme</button>

        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
    </header>

    `;
  }
}
customElements.define("site-header", SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <span>&copy; 2026 psithyros</span>
        <a href="./privacy.html">Privacy</a>
        <a href="./terms.html">Terms</a>
    </footer>
    `;
  }
}
customElements.define("site-footer", SiteFooter);
