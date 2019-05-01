const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav links
const navlinks = document.querySelectorAll('nav a');
let navved = Object.values(siteContent["nav"]);

for (let i = 0; i < 6; i++) {
  navlinks[i].textContent = navved[i];
}
for (i = 0; i < navlinks.length; i++) {
  navlinks[i].style.color = "green";
}

// header img
let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// header title 
let headerTitle = document.querySelector(".cta-text h1");
headerTitle.textContent = siteContent["cta"]["h1"];

// button text
let headerButton = document.querySelector(".cta-text button");
headerButton.textContent = siteContent["cta"]["button"];

// h4 top
const topContentHeadings = document.querySelectorAll(".top-content .text-content h4");
topContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];

// top content
const topContent = document.querySelectorAll(".top-content .text-content p");
topContent[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-content"];

// content image
const contentImg = document.getElementById('middle-img');
contentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// h4 bottom
const botContentHeadings = document.querySelectorAll(".bottom-content .text-content h4");
botContentHeadings[0].textContent = siteContent["main-content"]["services-h4"];
botContentHeadings[1].textContent = siteContent["main-content"]["product-h4"];
botContentHeadings[2].textContent = siteContent["main-content"]["vision-h4"];

// bottom content
const botContent = document.querySelectorAll(".bottom-content .text-content p");
botContent[0].textContent = siteContent["main-content"]["services-content"];
botContent[1].textContent = siteContent["main-content"]["product-content"];
botContent[2].textContent = siteContent["main-content"]["vision-content"];

// contact information
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

// footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];