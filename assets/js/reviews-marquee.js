(function () {
  const mqDesktop = window.matchMedia("(min-width: 1200px)");
  const wrapper = document.querySelector("#reviews_wrapper");
  const grid = document.querySelector("#reviews_wrapper .reviews-grid");
  if (!wrapper || !grid) return;

  let marqueesEl = null;
  let built = false;

  function teardown() {
    if (!built || !marqueesEl) return;
    marqueesEl.querySelectorAll("[data-marquee-clone]").forEach(function (n) {
      n.remove();
    });
    const gridNew = document.createElement("div");
    gridNew.className = "reviews-grid";
    marqueesEl.querySelectorAll(".reviews-marquee-track > .review-card").forEach(function (card) {
      gridNew.appendChild(card);
    });
    marqueesEl.replaceWith(gridNew);
    marqueesEl = null;
    built = false;
  }

  function build() {
    if (built) return;
    const currentGrid = document.querySelector("#reviews_wrapper .reviews-grid");
    if (!currentGrid) return;
    const cards = Array.from(currentGrid.querySelectorAll(":scope > .review-card"));
    if (!cards.length) return;

    const chunk = 3;
    const marquees = document.createElement("div");
    marquees.className = "reviews-marquees";

    for (let i = 0; i < cards.length; i += chunk) {
      const slice = cards.slice(i, i + chunk);
      const row = document.createElement("div");
      row.className = "reviews-marquee-row";
      const track = document.createElement("div");
      track.className = "reviews-marquee-track";
      if (Math.floor(i / chunk) % 2 === 1) {
        track.classList.add("reviews-marquee-track--reverse");
      }
      slice.forEach(function (c) {
        track.appendChild(c);
      });
      slice.forEach(function (c) {
        const cl = c.cloneNode(true);
        cl.dataset.marqueeClone = "1";
        cl.setAttribute("aria-hidden", "true");
        track.appendChild(cl);
      });
      row.appendChild(track);
      marquees.appendChild(row);
    }

    currentGrid.replaceWith(marquees);
    marqueesEl = marquees;
    built = true;
  }

  function sync() {
    if (mqDesktop.matches) {
      if (!built) build();
    } else {
      teardown();
    }
  }

  sync();
  if (typeof mqDesktop.addEventListener === "function") {
    mqDesktop.addEventListener("change", sync);
  } else {
    mqDesktop.addListener(sync);
  }
})();
