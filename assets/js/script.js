new Swiper(".carGallerySwiper", {
  spaceBetween: 0,
  loop: true,
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==========================================
// Site Preloader Logic
// ==========================================
(function () {
  /** Временно отключить прелоадер на всех страницах — поставьте false, чтобы снова включить */
  const PRELOADER_DISABLED = true;

  if (PRELOADER_DISABLED) {
    const preloader = document.getElementById("site-preloader");
    if (preloader) preloader.remove();
    document.body.classList.remove("overflow-hidden");
    return;
  }

  const preloader = document.getElementById("site-preloader");
  const preloaderBar = document.getElementById("preloaderBar");
  const preloaderPerc = document.getElementById("preloaderPerc");
  const body = document.body;

  if (!preloader || !preloaderBar || !preloaderPerc) return;

  let width = 0;
  let interval = setInterval(() => {
    if (width >= 85) {
      clearInterval(interval);
    } else {
      width += Math.random() * 5;
      if (width > 85) width = 85;
      updateProgress(width);
    }
  }, 100);

  function updateProgress(val) {
    const rounded = Math.floor(val);
    preloaderBar.style.width = rounded + "%";
    preloaderPerc.textContent = rounded + "%";
  }

  window.addEventListener("load", () => {
    clearInterval(interval);
    let finishWidth = width;
    let finishInterval = setInterval(() => {
      if (finishWidth >= 100) {
        clearInterval(finishInterval);
        setTimeout(() => {
          hidePreloader();
        }, 500);
      } else {
        finishWidth += 2;
        updateProgress(finishWidth);
      }
    }, 20);
  });

  function hidePreloader() {
    preloader.classList.add("preloader-hidden");
    body.classList.remove("overflow-hidden");

    // Animate site content entry
    if (typeof Motion !== "undefined") {
      const { animate, stagger } = Motion;
      animate(".preloader", { scale: 1.1, opacity: 0 }, { duration: 0.8, ease: "easeIn" }).then(() => {
        preloader.style.display = "none";
      });
    } else {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    }
  }
})();

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

function updateHeaderScrollState() {
  if (!siteHeader) return;
  const y = window.scrollY;
  if (y > 48) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
}

window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
updateHeaderScrollState();

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

// ================================================
// Quiz CTA Section — Logic + Motion.dev animations
// ================================================

(function () {
  const TOTAL_STEPS = 4;
  let currentStep = 1;
  const answers = {};

  const progressFill = document.getElementById("quizProgressFill");
  const steps = document.querySelectorAll(".quiz-cta__step");
  const questions = document.querySelectorAll(".quiz-cta__question");
  const prevBtn = document.getElementById("quizPrev");
  const nextBtn = document.getElementById("quizNext");

  if (!progressFill || !prevBtn || !nextBtn) return;

  // --- helpers ---
  function setProgress(step) {
    const pct = (step / TOTAL_STEPS) * 100;
    progressFill.style.width = pct + "%";

    steps.forEach((s) => {
      const n = parseInt(s.dataset.step);
      s.classList.remove("active", "done");
      if (n === step) s.classList.add("active");
      else if (n < step) s.classList.add("done");
    });
  }

  function showQuestion(step) {
    questions.forEach((q) => q.classList.remove("active"));
    const target = document.querySelector(`.quiz-cta__question[data-q="${step}"]`);
    if (target) target.classList.add("active");
  }

  function updateNav() {
    prevBtn.disabled = currentStep === 1;
    if (currentStep === TOTAL_STEPS) {
      nextBtn.textContent = "Получить результат";
      nextBtn.classList.add("quiz-finish");
    } else {
      nextBtn.innerHTML = `Далее <svg class="icon-arrow-triangle" width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M228.992 146.827 48.594 250.051c-17.497 9.998-38.04-7.264-31.166-26.206l34.642-95.842L17.428 32.16C10.554 13.178 31.097-4.045 48.594 5.953l180.398 103.224c14.606 8.319 14.568 29.331 0 37.65z" fill="currentColor"></path></svg>`;
      nextBtn.classList.remove("quiz-finish");
    }
  }

  // Option click
  document.querySelectorAll(".quiz-cta__option").forEach((opt) => {
    opt.addEventListener("click", () => {
      const q = opt.dataset.q;
      document.querySelectorAll(`.quiz-cta__option[data-q="${q}"]`).forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
      answers[q] = opt.dataset.val;

      // micro-animation on select
      animate(opt, { scale: [1.05, 1] }, { duration: 0.2, ease: "easeOut" });
    });
  });

  // NEXT
  nextBtn.addEventListener("click", () => {
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      setProgress(currentStep);
      showQuestion(currentStep);
      updateNav();
    } else {
      // Final step — animate card out, show success
      const card = document.getElementById("quiz-cta-card");
      animate(card, { opacity: [1, 0], scale: [1, 0.96] }, { duration: 0.3, ease: "easeIn" }).then(() => {
        card.innerHTML = `
          <div style="
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 80px 40px;
            text-align: center;
            gap: 20px;
            background: #111111;
          ">
            <div style="font-size: 64px; line-height: 1;">🎉</div>
            <p style="font-size: 28px; font-weight: 800; color: #fff; font-family: 'Despair Display', sans-serif; text-transform: uppercase;">
              Спасибо за ответы!
            </p>
            <p style="font-size: 16px; color: rgba(255,255,255,0.6); max-width: 420px; line-height: 1.7;">
              Наш менеджер свяжется с вами в течение 15 минут и подберёт идеальный автомобиль
              с <strong style="color: #d4a55a;">скидкой 10 000 ₽</strong> на фрахт.
            </p>
            <a href="https://t.me/Artex_manager" target="_blank" style="
              display: inline-flex;
              align-items: center;
              gap: 10px;
              background: #A87429;
              color: #fff;
              padding: 16px 36px;
              border-radius: 50px;
              font-size: 16px;
              font-weight: 700;
              text-decoration: none;
              margin-top: 8px;
              transition: background 0.25s ease;
            " onmouseover="this.style.background='#c4913b'" onmouseout="this.style.background='#A87429'">
              Написать в Telegram
            </a>
          </div>
        `;
        animate(card, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.4, ease: "easeOut" });
      });
    }
  });

  // PREV
  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      setProgress(currentStep);
      showQuestion(currentStep);
      updateNav();
    }
  });

  // Init
  setProgress(1);
  updateNav();

  // Motion.dev — inView animations for the quiz section
  inView("#quiz-cta-section", () => {
    animate("#quiz-cta-heading", { opacity: [0, 1], y: [40, 0] }, { duration: 0.6, ease: "easeOut" });
    animate("#quiz-cta-left", { opacity: [0, 1], x: [-50, 0] }, { duration: 0.65, ease: "easeOut", delay: 0.15 });
    animate("#quiz-cta-right", { opacity: [0, 1], x: [50, 0] }, { duration: 0.65, ease: "easeOut", delay: 0.25 });
    animate(".quiz-cta__car-img", { opacity: [0, 1], y: [30, 0], scale: [0.9, 1] }, { duration: 0.7, ease: "easeOut", delay: 0.45 });
    animate(".quiz-cta__promo-box", { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: "easeOut", delay: 0.6 });
    animate(".quiz-cta__stats", { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: "easeOut", delay: 0.75 });
  });
})();

// =============================================
// Premium Offers Section — Motion.dev Animations
// =============================================

(function () {
  const premSection = document.getElementById("prem-offers-section");
  if (!premSection) return;

  // Header: eyebrow pill + title + right side
  inView("#prem-offers-header", () => {
    animate(".prem-offers__eyebrow", { opacity: [0, 1], y: [-16, 0] }, { duration: 0.45, ease: "easeOut" });
    animate(".prem-offers__title", { opacity: [0, 1], x: [-40, 0] }, { duration: 0.6, ease: "easeOut", delay: 0.1 });
    animate(".prem-offers__subtitle", { opacity: [0, 1], x: [30, 0] }, { duration: 0.5, ease: "easeOut", delay: 0.2 });
    animate(".prem-offers__view-all", { opacity: [0, 1], x: [30, 0] }, { duration: 0.5, ease: "easeOut", delay: 0.3 });
  });

  // Cards: staggered reveal from bottom
  const premCards = document.querySelectorAll(".prem-card");
  inView("#prem-offers-grid", () => {
    animate(
      premCards,
      { opacity: [0, 1], y: [50, 0] },
      {
        duration: 0.55,
        delay: stagger(0.08, { from: "first" }),
        ease: [0.22, 1, 0.36, 1],
      },
    );
  });
})();

(function () {
  document.querySelectorAll(".prefooter-cta__form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
})();

(function () {
  const carPage = document.querySelector(".page-car-full");
  if (!carPage) return;

  const carSlider = document.querySelector(".carFullGallery");
  if (carSlider && typeof Swiper !== "undefined") {
    new Swiper(carSlider, {
      slidesPerView: 1,
      spaceBetween: 18,
      speed: 850,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 3200,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".car-full-gallery-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".car-full-gallery-next",
        prevEl: ".car-full-gallery-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.15,
          spaceBetween: 22,
        },
        1200: {
          slidesPerView: 1.28,
          spaceBetween: 24,
        },
      },
    });
  }

  if (typeof Fancybox !== "undefined") {
    Fancybox.bind('[data-fancybox="car-gallery"]', {
      Thumbs: {
        type: "classic",
      },
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });
  }

  if (typeof inView === "function" && typeof animate === "function") {
    document.querySelectorAll(".car-full-motion").forEach((item, index) => {
      inView(
        item,
        () => {
          const animation = animate(
            item,
            { opacity: [0, 1], y: [34, 0] },
            {
              duration: 0.58,
              delay: Math.min(index * 0.04, 0.18),
              ease: "easeOut",
            },
          );
          if (animation && animation.finished) {
            animation.finished.then(() => {
              item.classList.add("is-visible");
            });
          }
        },
        { margin: "0px 0px -12% 0px" },
      );
    });
  } else {
    document.querySelectorAll(".car-full-motion").forEach((item) => {
      item.classList.add("is-visible");
    });
  }
})();
