new Swiper(".bannerSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

const { animate, scroll, stagger, inView } = Motion;

animate(
  ".logo",
  { opacity: [0, 1], rotate: [-45, 0], scale: [0.2, 1] },
  {
    duration: 0.3,
    ease: "easeOut",
  },
);

animate(
  ".menu_wrapper li, .social_item_wrapper>div",
  { opacity: [0, 1], y: [-10, 0] },
  {
    delay: stagger(0.07, { from: "first" }),
    duration: 0.3,
  },
);

const siteHeader = document.querySelector(".site-header");
let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    if (!siteHeader) return;

    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY > 40 && isScrollingDown) {
      siteHeader.classList.add("is-scrolled");
    } else if (currentScrollY <= 20 || !isScrollingDown) {
      siteHeader.classList.remove("is-scrolled");
    }

    lastScrollY = currentScrollY;
  },
  { passive: true },
);

animate(
  ".fadein_one",
  {
    opacity: [0, 1],
    x: [-50, 0],
  },
  {
    duration: 0.5,
    ease: "easeOut",
  },
);

animate(
  ".fadein_two",
  {
    opacity: [0, 1],
    x: [-50, 0],
  },
  {
    delay: 0.1,
    duration: 0.5,
    ease: "easeOut",
  },
);

animate(
  ".fadein_three",
  {
    opacity: [0, 1],
    x: [-50, 0],
  },
  {
    delay: 0.2,
    duration: 0.5,
    ease: "easeOut",
  },
);

animate(
  ".fadein_four",
  {
    opacity: [0, 1],
    x: [-50, 0],
  },
  {
    delay: 0.3,
    duration: 0.5,
    ease: "easeOut",
  },
);

animate(
  ".fadein_five",
  {
    opacity: [0, 1],
    x: [-50, 0],
  },
  {
    delay: 0.4,
    duration: 0.5,
    ease: "easeOut",
  },
);

animate(
  ".fadein_six",
  {
    opacity: [0, 1],
    x: [50, 0],
  },
  {
    delay: 0.4,
    duration: 0.5,
    ease: "easeOut",
  },
);

const brandCards = document.querySelectorAll(".main_brands_wrapper .brand-card");
inView(".main_brands_wrapper", () => {
  animate(
    brandCards,
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.5,
      delay: stagger(0.12),
      easing: "ease-out",
    },
  );
});

inView(".inViewAnim", () => {
  animate(
    ".inViewAnim",
    {
      opacity: [0, 1],
      y: [50, 0],
    },
    {
      duration: 0.5,
      ease: "ease-out",
    },
  );
});

inView(".inViewAnimLeft", () => {
  animate(
    ".inViewAnimLeft",
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.5,
      ease: "ease-out",
    },
  );
}); 

inView(".inViewAnimRight", () => {
  animate(
    ".inViewAnimRight",
    {
      opacity: [0, 1],
      x: [50, 0],
    },
    {
      duration: 0.5,
      ease: "ease-out",
    },
  );
}); 

inView(".inViewAnimTop", () => {
  animate(
    ".inViewAnimTop",
    {
      opacity: [0, 1],
      y: [-50, 0],
    },
    {
      duration: 0.5,
      ease: "ease-out",
    },
  );
}); 
  
inView(".inViewAnimBottom", () => {
  animate(
    ".inViewAnimBottom",
    {
      opacity: [0, 1],
      y: [50, 0],
    },
    {
      duration: 0.5,
      ease: "ease-out",
    },
  );
}); 

inView(".section_title", () => {
  animate(
    ".section_title",
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.5,
      ease: "easeOut",
    },
  );
});

inView(".section_all_link", () => {
  animate(
    ".section_all_link",
    {
      opacity: [0, 1],
      x: [50, 0],
    },
    {
      duration: 0.5,
      ease: "easeOut",
    },
  );
});

const carCards = document.querySelectorAll(".car_card");
inView(".car_cards_wrapper", () => {
  animate(
    carCards,
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.5,
      delay: stagger(0.12),
      easing: "ease-out",
    },
  );
});

inView(".advantage_cards_wrapper", () => {
  animate(
    ".advantage_card",
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.5,
      delay: stagger(0.12),
      easing: "ease-out",
    },
  );
});

inView(".anim_stager_wrapper", () => {
  animate(
    ".anim_stager_wrapper .animStagger",
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.6,
      delay: stagger(0.12),
      easing: "ease-out",
    },
  );
}); 

inView(".blog_grid", () => {
  animate(
    ".blog_grid .animStagger",
    {
      opacity: [0, 1],
      x: [-50, 0],
    },
    {
      duration: 0.6,
      delay: stagger(0.12),
      easing: "ease-out",
    },
  );
});

inView(".inViewScale", () => {
  animate(
    ".inViewScale",
    {
      opacity: [0, 1],
      scale: [0, 1],
      y: [50, 0],
    },
    {
      duration: 0.5,
      ease: "ease-out",
    },
  );
});

// faq items
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-btn");
  const title = item.querySelector(".faq-title");
  const icon = item.querySelector(".faq-icon");
  const content = item.querySelector(".faq-content");

  button.addEventListener("click", () => {
    const isOpen = content.classList.contains("is-open");

    faqItems.forEach((otherItem) => {
      const otherTitle = otherItem.querySelector(".faq-title");
      const otherIcon = otherItem.querySelector(".faq-icon");
      const otherContent = otherItem.querySelector(".faq-content");

      otherTitle.classList.remove("faq-title-active");
      otherIcon.classList.remove("faq-icon-active");
      otherIcon.classList.remove("rotate-45");
      otherContent.classList.remove("is-open");
    });

    if (!isOpen) {
      title.classList.add("faq-title-active");
      icon.classList.add("faq-icon-active");
      icon.classList.add("rotate-45");
      content.classList.add("is-open");
    }
  });
});
