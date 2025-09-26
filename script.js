 window.addEventListener("load", function() {
      // Delay so text is visible long enough
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("hide"); // fade out
        document.getElementById("content").style.display = "block";
      }, 900); // show loader for 2.5s (adjust as you like)
    });

const scrollRevealOption = {
  distance: "100px",
  origin: "bottom",
  duration: 2000,
};

// -----------------------Hero Animations------------------------------

ScrollReveal().reveal("header.section__container h1", {
  ...scrollRevealOption,
  delay: 700,
  origin:"right",
    interval: 700,
});
ScrollReveal().reveal("nav", {
  ...scrollRevealOption,
  delay: 700,
  origin:"top",
    interval: 700,
});
ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
  delay: 500,
  origin:"top",
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
   origin:"left",
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".bgdraw", {
  ...scrollRevealOption,
  delay: 500,
});

// --------------------------------About ------------------------------------------

ScrollReveal().reveal(".about_right h3", {
  ...scrollRevealOption,
  delay: 700,
  origin:"top",
    interval: 700,
});
ScrollReveal().reveal(".about_right ul li", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about_left", {
  ...scrollRevealOption,
  delay: 500,
  origin:"left",
});


// ------------------------------------Services-------------------------------------

ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// -----------------------------------gallery----------------------------------------------
ScrollReveal().reveal("#gallery ul li img", {
  ...scrollRevealOption,
  interval: 200,
});

// -----------------------------------sub-------------------------------------------
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});


//----------------------------------------contact------------------------------------------
ScrollReveal().reveal(".container .content", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container .content", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".bottom_clint ul li img", {
  ...scrollRevealOption,
  interval: 200,
});

// document.addEventListener('DOMContentLoaded', () => {
//   const valueDisplays = document.querySelectorAll('.num');
//   const interval = 4000;
//   if (!valueDisplays.length) {
//     console.warn('No .num elements found (.num)');
//     return;
//   }

//   const parseEnd = (el) => {
//     const raw = el.getAttribute('data-val') || '0';
//     return parseInt(raw.replace(/,/g, ''), 10) || 0;
//   };

//   const startCounter = (el) => {
//     if (el.dataset.started) return; // don't restart
//     el.dataset.started = 'true';
//     let start = 0;
//     const end = parseEnd(el);
//     if (end <= 0) { el.textContent = String(end); return; }

//     const stepTime = Math.max(Math.floor(interval / end), 10); // min 10ms
//     const tick = () => {
//       start += 1;
//       el.textContent = start;
//       if (start < end) el._timer = setTimeout(tick, stepTime);
//     };
//     tick();
//   };

//   if ('IntersectionObserver' in window) {
//     const obs = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           startCounter(entry.target);
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.5 });
//     valueDisplays.forEach(el => obs.observe(el));
//   } else {
//     const inViewport = (el) => {
//       const r = el.getBoundingClientRect();
//       return r.top < window.innerHeight && r.bottom >= 0;
//     };
//     const onScroll = () => {
//       valueDisplays.forEach(el => { if (!el.dataset.started && inViewport(el)) startCounter(el); });
//       if ([...valueDisplays].every(el => el.dataset.started)) {
//         window.removeEventListener('scroll', onScroll);
//         window.removeEventListener('resize', onScroll);
//       }
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onScroll);
//     onScroll(); // initial check
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const interval = 2000;

  const startCounter = (el) => {
    if (el.dataset.started) return;
    el.dataset.started = 'true';

    let start = 0;
    const end = parseInt(el.getAttribute('data-val')) || 0;
    const suffix = el.getAttribute('data-suffix') || "K"; // 👈 new attribute

    el.textContent = start;

    if (end <= 0) return;

    const stepTime = Math.max(Math.floor(interval / end), 10);

    const tick = () => {
      start++;
      el.textContent = start.toLocaleString();
      if (start < end) {
        setTimeout(tick, stepTime);
      } else {
        el.textContent = end.toLocaleString() + suffix; // 👈 add suffix at the end
      }
    };
    tick();
  };

  // Observe each container2 separately
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = entry.target.querySelector('.num');
          if (num) startCounter(num);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.count .container2').forEach(box => {
      obs.observe(box);
    });
  }
});




