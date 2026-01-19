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
            <button
            class="theme-toggle"
            id="themeToggle"
            aria-label="Toggle dark mode"
            title="Toggle theme"
            >
            <span class="icon-sun" aria-hidden="true">
                <!-- Sun icon -->
                <svg viewBox="0 0 24 24" width="16" height="16">
                <circle cx="12" cy="12" r="5" />
                <g>
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                    <line x1="4.5" y1="4.5" x2="6.5" y2="6.5" />
                    <line x1="17.5" y1="17.5" x2="19.5" y2="19.5" />
                    <line x1="4.5" y1="19.5" x2="6.5" y2="17.5" />
                    <line x1="17.5" y1="6.5" x2="19.5" y2="4.5" />
                </g>
                </svg>
            </span>

            <span class="icon-moon" aria-hidden="true">
                <!-- Moon icon -->
                <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
                </svg>
            </span>
            </button>
        </div>

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
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
    </footer>
    `;
  }
}
customElements.define("site-footer", SiteFooter);
