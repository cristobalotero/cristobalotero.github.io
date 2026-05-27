const path = window.location.pathname.split("/").pop() || "index.html";
const links = document.querySelectorAll(".site-nav a");

for (const link of links) {
  const href = link.getAttribute("href");
  if (href === path) {
    link.classList.add("active");
  }
}

const reveals = document.querySelectorAll(".reveal");

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
