/**
 * Theming.
 *
 * Force dark theme - always use dark theme regardless of system preferences.
 *
 */
// Force dark theme - always set to dark
function forceDarkTheme() {
  document.documentElement.setAttribute("data-theme", "dark");
  // Store preference to prevent any other scripts from changing it
  if (window.localStorage) {
    window.localStorage.setItem("theme", "dark");
  }
}

// Initialize dark theme immediately
forceDarkTheme();

// Ensure theme stays dark even if system theme changes
if (window.matchMedia) {
  // Remove any existing listeners by recreating the media query
  const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const lightMediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  
  // Override any system theme changes - always force dark
  const forceDark = () => forceDarkTheme();
  
  // Still listen but always force dark
  if (darkMediaQuery.addEventListener) {
    darkMediaQuery.addEventListener("change", forceDark);
  }
  if (lightMediaQuery.addEventListener) {
    lightMediaQuery.addEventListener("change", forceDark);
  }
}
