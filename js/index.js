const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navigation Bar

const navItems = document.getElementsByTagName("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Navigation Items Color Change

Array.from(navItems).forEach(link => {
  link.style.color = "green";
  link.style.textDecoration = "none";
});

// Another way of doing the navigation bar

// const navItems = document.querySelectorAll("a");
// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].innerHTML = Object.values(siteContent["nav"])[i];
// }

// Top Content

const ctaText = document.getElementsByTagName("h1");
ctaText[0].textContent = siteContent["cta"]["h1"];

const ctaButton = document.getElementsByTagName("button");
ctaButton[0].textContent = siteContent["cta"]["button"];

const mainImg = document.getElementById("cta-img");
mainImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Main-Content

const topContent = document.querySelectorAll(".top-content .text-content h4");
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];

const topContentP = document.querySelectorAll(".top-content .text-content p");
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentP = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

// Contact

const contact = document.querySelectorAll(".contact h4");
contact[0].textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// Footer

const footerText = document.querySelectorAll("footer p");
footerText[0].textContent = siteContent["footer"]["copyright"];

// Add new content tasks

const newNavItem = document.createElement("a");
newNavItem.textContent = "Great";
newNavItem.style.color = "green";
newNavItem.style.textDecoration = "none";
newNavItem.style.cursor = "pointer";

const newNavItem2 = document.createElement("a");
newNavItem2.textContent = "Idea";
newNavItem2.style.color = "green";
newNavItem2.style.textDecoration = "none";
newNavItem2.style.cursor = "pointer";

const parentElement = document.querySelector("nav");

parentElement.prepend(newNavItem);
parentElement.append(newNavItem2);
