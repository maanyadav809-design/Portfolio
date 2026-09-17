/**
 * MAAN YADAV | DEVELOPER PORTFOLIO
 * Vanilla JavaScript Interactive Engine
 * Modular, lightweight ES6+ architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. TYPEWRITER EFFECT ENGINE
  // ==========================================================================
  const typewriterElement = document.getElementById('typewriter');
  const roles = [
    "B.Tech CSE @ JECRC University",
    "Creator of Resilix & Systems Builder",
    "C++ & Full-Stack Developer",
    "Algorithmic Thinker & Problem Solver",
    "Ryan International School Alum"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeRole() {
    if (!typewriterElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeRole, typingSpeed);
  }

  typeRole();

  // ==========================================================================
  // 2. NAVBAR SCROLL EFFECT & ACTIVE LINK SCROLL SPY
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background styling
    if (scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 450) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Scroll spy for navigation
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 3. MOBILE MENU DRAWER TOGGLE
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-item a');

  function toggleMobileMenu(forceClose = false) {
    if (!mobileMenuBtn || !mobileDrawer) return;

    const isOpen = forceClose ? false : !mobileDrawer.classList.contains('open');

    if (isOpen) {
      mobileDrawer.classList.add('open');
      mobileMenuBtn.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      mobileDrawer.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu());

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (
      mobileDrawer?.classList.contains('open') &&
      !mobileDrawer.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      toggleMobileMenu(true);
    }
  });

  // ==========================================================================
  // 4. INTERACTIVE HERO TERMINAL TABS & CODE RUNNER
  // ==========================================================================
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const btnRunCode = document.getElementById('btn-run-code');
  const terminalOutputText = document.getElementById('terminal-output-text');

  terminalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      terminalTabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }

      // Update output text contextually
      if (terminalOutputText) {
        if (targetId === 'tab-cpp') {
          terminalOutputText.textContent = '> g++ -O3 student.cpp -o student && ./student\nBuilding Resilix & High-Impact Systems 🚀';
        } else if (targetId === 'tab-json') {
          terminalOutputText.textContent = '> cat stack.json | jq .keyRepository\n"Resilix"';
        } else if (targetId === 'tab-bash') {
          terminalOutputText.textContent = '> bash bio.sh\n64 bytes from github.com/maanyadav809-: status=READY_TO_COLLABORATE time=0.35ms';
        }
      }
    });
  });

  btnRunCode?.addEventListener('click', () => {
    if (!terminalOutputText) return;

    terminalOutputText.textContent = '> Compiling with Clang 17.0.1 and executing...';
    btnRunCode.style.transform = 'scale(0.92)';

    setTimeout(() => {
      btnRunCode.style.transform = '';
      const quotes = [
        "> Output: Program compiled cleanly (0 warnings, 0 errors). Ready to build scalable software! 🚀",
        "> Output: Resilix modules active & verified ✓ High-performance logic loaded",
        "> Output: Maan Yadav profile loaded (JECRC University, Jaipur). Building the future! ⚡"
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      terminalOutputText.textContent = randomQuote;
      showToast('Simulated execution successful! Exit code 0.', 'success');
    }, 450);
  });

  // ==========================================================================
  // 5. DYNAMIC CARD MOUSE SPOTLIGHT EFFECT
  // ==========================================================================
  const spotlightCards = document.querySelectorAll('.spotlight-card');

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ==========================================================================
  // 6. ANIMATED NUMBER COUNTERS
  // ==========================================================================
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
          const duration = 1600; // ms
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;

            if (decimals > 0) {
              counter.textContent = currentVal.toFixed(decimals);
            } else {
              counter.textContent = Math.floor(currentVal).toString();
            }

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = decimals > 0 ? target.toFixed(decimals) : target.toString();
            }
          }

          requestAnimationFrame(updateCount);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('dsa-stats');
  if (statsSection) {
    countObserver.observe(statsSection);
  }

  // ==========================================================================
  // 7. SKILL CATEGORY FILTERING
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
          // Re-trigger animation
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================================================
  // 8. PROJECT DEEP DIVE MODAL SYSTEM
  // ==========================================================================
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentArea = document.getElementById('modal-content-area');
  const demoTriggers = document.querySelectorAll('.demo-trigger');

  const projectDetails = {
    resilix: {
      title: "Resilix — Resilient System Architecture & Developer Suite",
      badge: "Flagship Repository & Systems Architecture",
      description: "Resilix is an open-source software engineering repository created by Maan Yadav focused on building fault-tolerant modular software architectures, resilient asynchronous task handling, and responsive component orchestration for web and distributed systems.",
      architecture: [
        "Architected with graceful error boundaries and self-healing state transitions under heavy load.",
        "Modular event-driven architecture designed for high-throughput and minimal execution overhead.",
        "Zero-dependency core utilities with clean abstraction interfaces and pluggable components.",
        "Comprehensive test coverage verifying edge cases, network partitioning, and crash recovery."
      ],
      techStack: ["Resilix Core", "JavaScript (ES6+)", "Node.js", "C++", "System Architecture", "Git"],
      metrics: "Reliability: Engineered for zero-downtime state resilience and fault-tolerant computing.",
      githubUrl: "https://github.com/maanyadav809-/Resilix",
      demoUrl: "https://github.com/maanyadav809-"
    },
    algostream: {
      title: "AlgoStream — Interactive Graph & Algorithm Simulation Suite",
      badge: "Algorithms & Visual Computing",
      description: "AlgoStream was born out of a desire to make complex graph theory and dynamic programming concepts visually transparent and intuitive for engineering students. It models algorithmic traversals as discrete state machines with step-by-step playback, breakpoint stepping, and live complexity diagnostics.",
      architecture: [
        "Pure Canvas rendering loop running at locked 60 FPS with adaptive dirty-region updates.",
        "Custom Graph Data Structure supporting directed, undirected, and negative-weight edge topologies.",
        "Real-time Priority Queue / Heap visualization for Dijkstra's shortest path calculation.",
        "Exportable execution trace allowing students to debug exact edge relaxation sequences."
      ],
      techStack: ["JavaScript ES6+", "HTML5 Canvas API", "CSS Grid & Variables", "Heap/Graph Algorithms"],
      metrics: "Benchmark: Handles dynamic graphs with 500+ nodes and 1,200+ edges with zero frame stutter.",
      githubUrl: "https://github.com/maanyadav809-",
      demoUrl: "https://github.com/maanyadav809-"
    },
    devsync: {
      title: "DevSync — Real-Time Collaborative Workspace & Scratchpad",
      badge: "Distributed Systems & Real-Time Sync",
      description: "A fast, privacy-respecting collaborative coding room allowing developers and student study groups to write code, share execution notes, and brainstorm solutions in real-time with sub-50ms synchronization latency.",
      architecture: [
        "Lightweight Node.js WebSocket gateway with custom message serialization protocols.",
        "Conflict-resolution mechanism inspired by Operational Transformation (OT) for simultaneous typing.",
        "Instant URL room hash generation requiring zero account creation for rapid hackathon pairings.",
        "Integrated Monaco Editor syntax highlighting for C++, Python, JavaScript, and Markdown."
      ],
      techStack: ["Node.js", "WebSockets (ws)", "Express.js", "Monaco Editor API", "Docker"],
      metrics: "Performance: Tested with 12 simultaneous live cursors with < 35ms broadcast latency.",
      githubUrl: "https://github.com/maanyadav809-",
      demoUrl: "https://github.com/maanyadav809-"
    }
  };

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data || !modalContentArea || !projectModal) return;

    modalContentArea.innerHTML = `
      <div class="project-type-badge mb-2">
        <span class="badge-dot"></span>
        <span>${data.badge}</span>
      </div>
      <h2 class="project-title text-xl mb-3" style="font-size: 1.5rem; color: #fff;">${data.title}</h2>
      <p class="project-desc mb-4">${data.description}</p>
      
      <div class="modal-arch-box">
        <div class="font-bold text-cyan mb-2" style="font-family: var(--font-mono); font-size: 0.85rem;">⚙️ ARCHITECTURE &amp; ENGINEERING HIGHLIGHTS</div>
        <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.45rem;">
          ${data.architecture.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="text-sm font-mono text-emerald mb-4" style="background: rgba(16, 185, 129, 0.08); padding: 0.6rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid rgba(16, 185, 129, 0.25); margin-top: 1rem;">
        ⚡ ${data.metrics}
      </div>

      <div class="project-tags mb-4">
        ${data.techStack.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>View on GitHub (@maanyadav809-)</span>
          <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <button class="btn btn-outline btn-sm" onclick="document.getElementById('modal-close-btn').click();">
          <span>Close Window</span>
        </button>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  demoTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const proj = btn.getAttribute('data-project');
      if (proj) {
        openProjectModal(proj);
      }
    });
  });

  modalCloseBtn?.addEventListener('click', closeProjectModal);

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal?.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // ==========================================================================
  // 9. ONE-CLICK CLIPBOARD COPY HELPER
  // ==========================================================================
  function setupCopyButton(btnId, textId, tooltipId, label) {
    const btn = document.getElementById(btnId);
    const textEl = document.getElementById(textId);
    const tooltip = document.getElementById(tooltipId);

    if (!btn || !textEl) return;

    btn.addEventListener('click', async () => {
      const textToCopy = textEl.textContent?.trim() || '';
      try {
        await navigator.clipboard.writeText(textToCopy);
        if (tooltip) {
          tooltip.textContent = 'Copied! ✓';
          tooltip.style.opacity = '1';
        }

        showToast(`Copied ${label} to clipboard!`, 'success');

        setTimeout(() => {
          if (tooltip) {
            tooltip.textContent = 'Copy';
            tooltip.style.opacity = '';
          }
        }, 2000);
      } catch (err) {
        // Fallback for browsers blocking clipboard API
        try {
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          if (tooltip) {
            tooltip.textContent = 'Copied! ✓';
            tooltip.style.opacity = '1';
          }
          showToast(`Copied ${label} to clipboard!`, 'success');
          setTimeout(() => {
            if (tooltip) {
              tooltip.textContent = 'Copy';
              tooltip.style.opacity = '';
            }
          }, 2000);
        } catch (e2) {
          showToast('Failed to copy to clipboard', 'error');
        }
      }
    });
  }

  setupCopyButton('btn-copy-email', 'copy-email-text', 'copy-email-tooltip', 'Personal Email');
  setupCopyButton('btn-copy-college-email', 'copy-college-email-text', 'copy-college-email-tooltip', 'College Email');
  setupCopyButton('btn-copy-phone', 'copy-phone-text', 'copy-phone-tooltip', 'Phone Number');
  setupCopyButton('btn-copy-location', 'copy-location-text', 'copy-location-tooltip', 'Location');

  // ==========================================================================
  // 10. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  const nameFeedback = document.getElementById('name-feedback');
  const emailFeedback = document.getElementById('email-feedback');
  const messageFeedback = document.getElementById('message-feedback');

  // Character counter for message textarea
  messageInput?.addEventListener('input', () => {
    const len = messageInput.value.length;
    if (charCounter) {
      charCounter.textContent = `${len} / 500`;
      if (len >= 480) {
        charCounter.style.color = 'var(--rose-primary)';
      } else {
        charCounter.style.color = 'var(--text-muted)';
      }
    }
    validateField(messageInput, messageFeedback, len >= 10, 'Message should be at least 10 characters.');
  });

  // Validation helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateField(inputEl, feedbackEl, isValid, errorMsg) {
    if (!inputEl || !feedbackEl) return isValid;

    if (!isValid) {
      inputEl.classList.add('invalid');
      feedbackEl.textContent = errorMsg;
      return false;
    } else {
      inputEl.classList.remove('invalid');
      feedbackEl.textContent = '';
      return true;
    }
  }

  nameInput?.addEventListener('blur', () => {
    validateField(nameInput, nameFeedback, nameInput.value.trim().length >= 2, 'Please enter your name (min 2 characters).');
  });

  emailInput?.addEventListener('blur', () => {
    validateField(emailInput, emailFeedback, validateEmail(emailInput.value.trim()), 'Please enter a valid email address.');
  });

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameFeedback, nameInput.value.trim().length >= 2, 'Please enter your name.');
    const isEmailValid = validateField(emailInput, emailFeedback, validateEmail(emailInput.value.trim()), 'Please enter a valid email.');
    const isMessageValid = validateField(messageInput, messageFeedback, messageInput.value.trim().length >= 10, 'Please enter a message of at least 10 characters.');

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      showToast('Please check the required form fields.', 'error');
      return;
    }

    // Simulate sending with loading state
    if (submitBtn && submitBtnText) {
      submitBtn.disabled = true;
      submitBtnText.textContent = 'Transmitting Message...';
    }

    setTimeout(() => {
      showToast(`Thank you, ${nameInput.value.trim()}! Your message has been received by Maan Yadav. I'll get back to you soon. 🚀`, 'success');

      contactForm.reset();
      if (charCounter) charCounter.textContent = '0 / 500';
      if (submitBtn && submitBtnText) {
        submitBtn.disabled = false;
        submitBtnText.textContent = 'Send Message';
      }
    }, 900);
  });

  // ==========================================================================
  // 11. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="icon-sm text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
      toast.style.borderColor = 'var(--emerald-primary)';
    } else if (type === 'error') {
      iconSvg = `<svg class="icon-sm text-rose" style="color: var(--rose-primary);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
      toast.style.borderColor = 'var(--rose-primary)';
    } else {
      iconSvg = `<svg class="icon-sm text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  // ==========================================================================
  // 12. LIVE TIMEZONE CLOCK & FOOTER YEAR
  // ==========================================================================
  const liveClock = document.getElementById('live-clock');
  const currentYear = document.getElementById('current-year');

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear().toString();
  }

  function updateLiveClock() {
    if (!liveClock) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      liveClock.textContent = `${timeString} IST (UTC+5:30)`;
    } catch (e) {
      liveClock.textContent = 'UTC+05:30 (IST)';
    }
  }

  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // ==========================================================================
  // 13. SCROLL REVEAL ANIMATIONS VIA INTERSECTION OBSERVER
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to re-animate
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
