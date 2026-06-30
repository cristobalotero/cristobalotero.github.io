const path = window.location.pathname.split("/").pop() || "index.html";
const links = document.querySelectorAll(".site-nav a");
const themeToggle = document.querySelector("[data-theme-toggle]");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

for (const link of links) {
  const href = link.getAttribute("href");
  if (href === path) {
    link.classList.add("active");
  }
}

const getStoredTheme = () => {
  try {
    const theme = localStorage.getItem("theme");
    return theme === "light" || theme === "dark" ? theme : null;
  } catch (error) {
    return null;
  }
};

const getActiveTheme = () => {
  const storedTheme = getStoredTheme();
  return storedTheme || (systemTheme.matches ? "dark" : "light");
};

const updateThemeToggle = () => {
  if (!themeToggle) return;

  const activeTheme = getActiveTheme();
  const isDark = activeTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  const label = `Switch to ${nextTheme} mode`;

  themeToggle.classList.toggle("is-dark", isDark);
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.title = label;
};

const setStoredTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // The visible theme still changes even if storage is unavailable.
  }
  updateThemeToggle();
};

if (themeToggle) {
  updateThemeToggle();
  themeToggle.addEventListener("click", () => {
    setStoredTheme(getActiveTheme() === "dark" ? "light" : "dark");
  });
}

const handleSystemThemeChange = () => {
  if (!getStoredTheme()) {
    updateThemeToggle();
  }
};

if (systemTheme.addEventListener) {
  systemTheme.addEventListener("change", handleSystemThemeChange);
} else if (systemTheme.addListener) {
  systemTheme.addListener(handleSystemThemeChange);
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("in");
          }, index * 90);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}
