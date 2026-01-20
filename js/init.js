const theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.documentElement.classList.add("dark");
}

/**
 * Dynamically loads the Google Analytics gtag.js script and initializes it.
 */
function loadGoogleAnalytics(tagId) {
  // Define the dataLayer and gtag function if not already present
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  // Load the gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DLT3JQCWLX'
  document.head.appendChild(script);

  // Initialize gtag config
  window.gtag('js', new Date());
  window.gtag('config', tagId);
}

// Call the function with your Tag ID
loadGoogleAnalytics('G-DLT3JQCWLX');
