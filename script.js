(function themeBootstrap() {
  const storageKey = "neetcode-theme";
  const root = document.documentElement;
  const savedTheme = window.localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");

  root.dataset.themePreference = savedTheme || "";
  root.classList.toggle("dark", theme === "dark");
})();

document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "neetcode-theme";
  const root = document.documentElement;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const elements = {
    nav: document.querySelector("[data-site-nav]"),
    menuToggle: document.querySelector("[data-mobile-menu-toggle]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    mobileMenuClose: document.querySelectorAll("[data-mobile-menu-close]"),
    themeToggle: document.querySelector("[data-theme-toggle]"),
    revealItems: document.querySelectorAll(".animate-on-scroll"),
    typedSource: document.querySelector("[data-typed-source]"),
    typedOutput: document.querySelector("[data-typed-output]"),
    roadmapDemo: document.querySelector("[data-roadmap-demo]"),
    roadmapProgress: document.querySelector("[data-roadmap-progress]"),
    roadmapBar: document.querySelector("[data-roadmap-bar]"),
    roadmapTasks: document.querySelectorAll("[data-roadmap-task]"),
    lessonStory: document.querySelector("[data-lesson-story]"),
    lessonPrev: document.querySelector("[data-lesson-prev]"),
    lessonNext: document.querySelector("[data-lesson-next]"),
    lessonCounter: document.querySelector("[data-lesson-counter]"),
    lessonSlides: document.querySelectorAll("[data-lesson-slide]")
  };

  let roadmapDemoPlayed = false;
  let activeLessonIndex = -1;
  let lessonPlaybackId = 0;
  let lessonReplayTimers = [];

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);

    if (elements.themeToggle) {
      elements.themeToggle.setAttribute("aria-pressed", String(isDark));
    }
  }

  function setMenuOpen(isOpen) {
    if (elements.nav) {
      elements.nav.classList.toggle("is-menu-open", isOpen);
    }

    if (elements.menuToggle) {
      elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    }

    if (elements.mobileMenu) {
      elements.mobileMenu.hidden = !isOpen;
    }
  }

  function syncScrolledState() {
    if (elements.nav) {
      elements.nav.classList.toggle("is-scrolled", window.scrollY > 10);
    }
  }

  function updateRoadmapDemo(count) {
    const total = elements.roadmapTasks.length;

    if (total === 0) {
      return;
    }

    if (elements.roadmapProgress) {
      elements.roadmapProgress.textContent = `${count} / ${total} completed`;
    }

    if (elements.roadmapBar) {
      elements.roadmapBar.style.width = `${(count / total) * 100}%`;
    }
  }

  function completeRoadmapTask(task) {
    task.classList.add("practice-preview__problem--done");
  }

  function clearLessonTimers() {
    lessonReplayTimers.forEach((timer) => {
      window.clearTimeout(timer);
    });
    lessonReplayTimers = [];
  }

  function resetLessonSlide(slide) {
    if (!slide) {
      return;
    }

    slide.dataset.demoPhase = "1";

    const stepLabel = slide.querySelector("[data-demo-step-label]");

    if (stepLabel) {
      stepLabel.textContent = "Step 1";
    }
  }

  function setLessonPhase(slide, phase) {
    slide.dataset.demoPhase = String(phase);

    const stepLabel = slide.querySelector("[data-demo-step-label]");

    if (stepLabel) {
      stepLabel.textContent = `Step ${phase}`;
    }
  }

  function playLessonSlide(slide) {
    if (!slide) {
      return;
    }

    lessonPlaybackId += 1;
    clearLessonTimers();
    resetLessonSlide(slide);

    if (prefersReducedMotion.matches) {
      setLessonPhase(slide, 2);
      return;
    }

    const playbackId = lessonPlaybackId;
    const phaseTwoTimer = window.setTimeout(() => {
      if (playbackId !== lessonPlaybackId) {
        return;
      }

      setLessonPhase(slide, 2);
    }, 820);

    lessonReplayTimers.push(phaseTwoTimer);
  }

  function setActiveLesson(index) {
    if (index === activeLessonIndex || index < 0 || index >= elements.lessonSlides.length) {
      return;
    }

    activeLessonIndex = index;

    elements.lessonSlides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === index;
      slide.classList.toggle("lesson-card--active", isActive);

      if (!isActive) {
        resetLessonSlide(slide);
      }
    });

    if (elements.lessonCounter) {
      elements.lessonCounter.textContent = `${index + 1} / ${elements.lessonSlides.length}`;
    }

    if (elements.lessonPrev) {
      elements.lessonPrev.disabled = index === 0;
    }

    if (elements.lessonNext) {
      elements.lessonNext.disabled = index === elements.lessonSlides.length - 1;
    }

    playLessonSlide(elements.lessonSlides[index]);
  }

  function setupLessonStory() {
    if (elements.lessonSlides.length === 0) {
      return;
    }

    setActiveLesson(activeLessonIndex >= 0 ? activeLessonIndex : 0);
  }

  function playRoadmapDemo() {
    if (
      roadmapDemoPlayed ||
      !elements.roadmapDemo ||
      !elements.roadmapProgress ||
      !elements.roadmapBar ||
      elements.roadmapTasks.length === 0
    ) {
      return;
    }

    roadmapDemoPlayed = true;
    updateRoadmapDemo(0);

    if (prefersReducedMotion.matches) {
      elements.roadmapTasks.forEach((task) => {
        completeRoadmapTask(task);
      });

      updateRoadmapDemo(elements.roadmapTasks.length);
      return;
    }

    const initialDelay = 520;
    const stepDelay = 720;

    elements.roadmapTasks.forEach((task, index) => {
      window.setTimeout(() => {
        completeRoadmapTask(task);
        updateRoadmapDemo(index + 1);
      }, initialDelay + stepDelay * index);
    });
  }

  applyTheme(root.classList.contains("dark") ? "dark" : "light");
  setMenuOpen(false);
  syncScrolledState();
  updateRoadmapDemo(0);
  setupLessonStory();

  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", () => {
      const nextTheme = root.classList.contains("dark") ? "light" : "dark";
      window.localStorage.setItem(storageKey, nextTheme);
      root.dataset.themePreference = nextTheme;
      applyTheme(nextTheme);
    });
  }

  mediaQuery.addEventListener("change", (event) => {
    if (!root.dataset.themePreference) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  if (elements.menuToggle) {
    elements.menuToggle.addEventListener("click", () => {
      const isOpen = elements.menuToggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });
  }

  elements.mobileMenuClose.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  window.addEventListener("scroll", () => {
    syncScrolledState();
  }, { passive: true });

  window.addEventListener("resize", setupLessonStory, { passive: true });

  elements.lessonPrev?.addEventListener("click", () => {
    setActiveLesson(Math.max(0, activeLessonIndex - 1));
  });

  elements.lessonNext?.addEventListener("click", () => {
    setActiveLesson(Math.min(elements.lessonSlides.length - 1, activeLessonIndex + 1));
  });

  elements.lessonSlides.forEach((slide, index) => {
    slide.querySelector("[data-demo-replay]")?.addEventListener("click", () => {
      setActiveLesson(index);
      playLessonSlide(slide);
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target === elements.roadmapDemo) {
          playRoadmapDemo();
        }
      }
    });
  }, { threshold: 0.1 });

  elements.revealItems.forEach((item) => {
    revealObserver.observe(item);
  });

  if (elements.typedSource && elements.typedOutput) {
    const payload = JSON.parse(elements.typedSource.textContent);
    const fullText = Array.isArray(payload.lines) ? payload.lines.join("\n") : "";
    let index = 0;
    let deleting = false;

    const tick = () => {
      if (!deleting) {
        index = Math.min(index + 1, fullText.length);
        elements.typedOutput.textContent = fullText.slice(0, index);

        if (index === fullText.length) {
          deleting = true;
          window.setTimeout(tick, 1800);
          return;
        }
      } else {
        index = Math.max(index - 1, 0);
        elements.typedOutput.textContent = fullText.slice(0, index);

        if (index === 0) {
          deleting = false;
        }
      }

      const delay = deleting ? 18 : 34;
      window.setTimeout(tick, delay);
    };

    tick();
  }
});
