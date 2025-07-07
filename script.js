// Complete Enhanced JavaScript with All Animations and Effects
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector("#navbarNav")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show")
      navToggle.classList.toggle("active")

      // Animate hamburger lines
      const spans = navToggle.querySelectorAll("span")
      if (navToggle.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-menu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("show")
        if (navToggle) {
          navToggle.classList.remove("active")

          // Reset hamburger lines
          const spans = navToggle.querySelectorAll("span")
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      }
    })
  })

  // Enhanced Navbar scroll effect
  let lastScrollY = window.scrollY
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navbar.style.background = "rgba(248, 250, 252, 0.98)"
      navbar.style.boxShadow = "0 4px 20px rgba(30, 64, 175, 0.1)"
      navbar.style.borderBottom = "1px solid rgba(30, 64, 175, 0.1)"
    } else {
      navbar.style.background = "rgba(248, 250, 252, 0.95)"
      navbar.style.boxShadow = "none"
      navbar.style.borderBottom = "1px solid rgba(30, 64, 175, 0.1)"
    }

    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.style.transform = "translateY(-100%)"
    } else {
      navbar.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Device tabs functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and panels
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabPanels.forEach((panel) => panel.classList.remove("active"))

      // Add active class to clicked button and corresponding panel
      button.classList.add("active")
      const targetPanel = document.getElementById(targetTab)
      if (targetPanel) {
        targetPanel.classList.add("active")
      }
    })
  })

  // Enhanced Hero Dashboard Interactions
  document.querySelectorAll(".access-point").forEach((point) => {
    point.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(8px) scale(1.02)"
      this.style.boxShadow = "0 8px 16px rgba(30, 64, 175, 0.2)"
    })

    point.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)"
      this.style.boxShadow = "none"
    })
  })

  // Floating cards interactive hover
  document.querySelectorAll(".float-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.animationPlayState = "paused"
      this.style.transform = "translateY(-25px) scale(1.05)"
      this.style.boxShadow = "0 15px 30px rgba(30, 64, 175, 0.3)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.animationPlayState = "running"
      this.style.transform = ""
      this.style.boxShadow = "0 8px 16px rgba(30, 64, 175, 0.2)"
    })
  })

  // Security dashboard tilt effect
  const dashboard = document.querySelector(".security-dashboard")
  if (dashboard) {
    dashboard.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    dashboard.addEventListener("mouseleave", function () {
      this.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
    })
  }

  // Enhanced status dot animation
  const statusDot = document.querySelector(".status-indicator")
  if (statusDot) {
    setInterval(() => {
      statusDot.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.8)"
      setTimeout(() => {
        statusDot.style.boxShadow = "none"
      }, 500)
    }, 3000)
  }

  // Live feed user avatar animation
  const userAvatar = document.querySelector(".user-avatar")
  if (userAvatar) {
    userAvatar.addEventListener("click", function () {
      this.style.animation = "bounce 0.6s ease"
      setTimeout(() => {
        this.style.animation = ""
      }, 600)
    })
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe elements for fade-in animation
  document
    .querySelectorAll(".security-card, .option-card, .device-card, .environment-card, .standout-item")
    .forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      fadeInObserver.observe(el)
    })

  // Counter animation for stats
  const animateCounter = (element, target, suffix = "", duration = 2000) => {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        element.textContent = target + suffix
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(start) + suffix
      }
    }, 16)
  }

  // Trigger counter animation when stats are visible
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(".stat-number")

          statNumbers.forEach((stat) => {
            const target = Number.parseFloat(stat.getAttribute("data-target"))
            const text = stat.textContent

            if (text.includes("%")) {
              animateCounter(stat, target, "%")
            } else if (text.includes("K+")) {
              animateCounter(stat, target, "K+")
            } else if (text.includes("/7")) {
              animateCounter(stat, target, "/7")
            } else {
              animateCounter(stat, target)
            }
          })

          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  // Observe stat sections
  document.querySelectorAll(".cta-section, .live-stats").forEach((section) => {
    statsObserver.observe(section)
  })

  // Parallax effect for hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-background")

    if (heroBackground) {
      const speed = scrolled * 0.5
      heroBackground.style.transform = `translateY(${speed}px)`
    }
  })

  // Interactive hover effects for cards
  document.querySelectorAll(".option-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

  // Interactive hover effects for environment cards
  document.querySelectorAll(".environment-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const overlay = card.querySelector(".card-overlay")
      if (overlay) {
        overlay.style.opacity = "0.3"
      }
    })

    card.addEventListener("mouseleave", () => {
      const overlay = card.querySelector(".card-overlay")
      if (overlay) {
        overlay.style.opacity = "0"
      }
    })
  })

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")

    // Animate hero elements with stagger
    const heroElements = document.querySelectorAll(".hero-content > *")
    heroElements.forEach((element, index) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition =
        "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"

      setTimeout(
        () => {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        },
        index * 150 + 500,
      )
    })

    // Animate hero visual
    const heroVisual = document.querySelector(".hero-visual")
    if (heroVisual) {
      heroVisual.style.opacity = "0"
      heroVisual.style.transform = "translateX(50px)"
      heroVisual.style.transition = "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)"

      setTimeout(() => {
        heroVisual.style.opacity = "1"
        heroVisual.style.transform = "translateX(0)"
      }, 800)
    }
  })

  // Add micro-interactions for buttons
  document.querySelectorAll(".btn-primary, .btn-secondary, .btn-demo").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)"
    })

    button.addEventListener("mousedown", () => {
      button.style.transform = "translateY(0) scale(0.98)"
    })

    button.addEventListener("mouseup", () => {
      button.style.transform = "translateY(-2px) scale(1)"
    })
  })

  // Add ripple effect to cards
  document.querySelectorAll(".security-card, .option-card, .device-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("div")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Enhanced scroll-triggered animations with stagger
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const children = entry.target.children
        Array.from(children).forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = "1"
            child.style.transform = "translateY(0)"
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  // Apply stagger animation to grids
  document
    .querySelectorAll(".security-grid, .options-container, .device-grid, .environment-grid, .standout-grid")
    .forEach((grid) => {
      Array.from(grid.children).forEach((child) => {
        child.style.opacity = "0"
        child.style.transform = "translateY(30px)"
        child.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      })
      staggerObserver.observe(grid)
    })

  // Add scroll progress indicator
  const scrollProgress = document.createElement("div")
  scrollProgress.className = "scroll-progress"
  document.body.appendChild(scrollProgress)

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    scrollProgress.style.width = scrollPercent + "%"
  })

  // Add keyboard navigation support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation")
    }
  })

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation")
  })

  // Live camera feed simulation
  const cameraFeed = document.querySelector(".feed-content")
  if (cameraFeed) {
    setInterval(() => {
      const scanLine = cameraFeed.querySelector(".scan-line")
      if (scanLine) {
        scanLine.style.animation = "none"
        setTimeout(() => {
          scanLine.style.animation = "scanLineMove 2s ease-in-out infinite"
        }, 100)
      }
    }, 5000)
  }

  // Device screen animations
  const deviceScreens = document.querySelectorAll(".screen")
  deviceScreens.forEach((screen) => {
    setInterval(
      () => {
        screen.style.opacity = "0.8"
        setTimeout(() => {
          screen.style.opacity = "1"
        }, 200)
      },
      3000 + Math.random() * 2000,
    )
  })

  // Integration hub data flow
  const dataPackets = document.querySelectorAll(".data-packet")
  dataPackets.forEach((packet, index) => {
    setInterval(
      () => {
        packet.style.opacity = "1"
        setTimeout(() => {
          packet.style.opacity = "0"
        }, 2000)
      },
      3000 + index * 1000,
    )
  })

  // Enhanced typing effect for hero title
  const typingText = document.querySelector(".typing-effect")
  if (typingText) {
    const text = typingText.textContent
    typingText.textContent = ""
    let i = 0

    const typeWriter = () => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(typeWriter, 2000)
  }

  // Particle system for floating elements
  const createParticles = () => {
    const particleContainer = document.createElement("div")
    particleContainer.className = "particle-system"
    particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(30, 64, 175, 0.3);
                border-radius: 50%;
                animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
            `
      particleContainer.appendChild(particle)
    }

    document.body.appendChild(particleContainer)
  }

  // Add particle float animation
  const particleStyle = document.createElement("style")
  particleStyle.textContent = `
        @keyframes particleFloat {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `
  document.head.appendChild(particleStyle)

  // Initialize particles
  createParticles()

  // Enhanced device interactions
  document.querySelectorAll(".device-mockup").forEach((device) => {
    device.addEventListener("mouseenter", () => {
      const lights = device.querySelectorAll(".light")
      lights.forEach((light) => {
        light.style.animationDuration = "0.5s"
      })
    })

    device.addEventListener("mouseleave", () => {
      const lights = device.querySelectorAll(".light")
      lights.forEach((light) => {
        light.style.animationDuration = "2s"
      })
    })
  })

  // Real-time clock for dashboard
  const updateClock = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString()
    const clockElements = document.querySelectorAll(".live-time")
    clockElements.forEach((clock) => {
      clock.textContent = timeString
    })
  }

  setInterval(updateClock, 1000)
  updateClock()

  // Enhanced integration node interactions
  document.querySelectorAll(".integration-node").forEach((node) => {
    node.addEventListener("mouseenter", () => {
      node.style.transform = "scale(1.1)"
      node.style.background = "rgba(59, 130, 246, 0.25)"
    })

    node.addEventListener("mouseleave", () => {
      node.style.transform = "scale(1)"
      node.style.background = "rgba(59, 130, 246, 0.15)"
    })
  })

  // Advanced scroll effects
  let ticking = false

  const updateScrollEffects = () => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight

    // Parallax backgrounds
    document.querySelectorAll(".parallax-bg").forEach((bg) => {
      const speed = bg.dataset.speed || 0.5
      bg.style.transform = `translateY(${scrollTop * speed}px)`
    })

    // Reveal animations
    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      if (elementTop < windowHeight * 0.8) {
        element.classList.add("revealed")
      }
    })

    ticking = false
  }

  const requestScrollUpdate = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestScrollUpdate)

  // Performance optimization
  const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // Optimized resize handler
  const handleResize = debounce(() => {
    // Recalculate animations on resize
    const heroVisual = document.querySelector(".hero-visual")
    if (heroVisual && window.innerWidth < 768) {
      heroVisual.style.transform = "scale(0.8)"
    } else if (heroVisual) {
      heroVisual.style.transform = "scale(1)"
    }
  }, 250)

  window.addEventListener("resize", handleResize)

  console.log("SecureFlow Access Control System - Complete Enhanced Version Loaded Successfully!")
  console.log("Features: Advanced animations, live effects, 3D interactions, particle systems, and responsive design")
})

// Enhanced Card Tilt Effects
function initCardTiltEffects() {
  const tiltCards = document.querySelectorAll(".card-tilt")

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Calculate tilt based on corner proximity
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      // Enhanced tilt for corners
      const cornerMultiplier = getCornerMultiplier(x, y, rect.width, rect.height)

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX * cornerMultiplier}deg) 
        rotateY(${rotateY * cornerMultiplier}deg) 
        translateZ(10px)
      `

      // Add glow cursor effect
      const glowCursor = card.querySelector(".glow-cursor")
      if (glowCursor) {
        glowCursor.style.left = x + "px"
        glowCursor.style.top = y + "px"
      }
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
    })

    // Add click interaction
    card.addEventListener("click", (e) => {
      createParticleExplosion(e.clientX, e.clientY, card)
    })
  })
}

function getCornerMultiplier(x, y, width, height) {
  const cornerThreshold = 0.3
  const isNearLeftEdge = x < width * cornerThreshold
  const isNearRightEdge = x > width * (1 - cornerThreshold)
  const isNearTopEdge = y < height * cornerThreshold
  const isNearBottomEdge = y > height * (1 - cornerThreshold)

  if ((isNearLeftEdge || isNearRightEdge) && (isNearTopEdge || isNearBottomEdge)) {
    return 2.5 // Corner areas get stronger tilt
  } else if (isNearLeftEdge || isNearRightEdge || isNearTopEdge || isNearBottomEdge) {
    return 1.8 // Edge areas get medium tilt
  }
  return 1 // Center areas get normal tilt
}

// Interactive Particle System
function createParticleExplosion(x, y, container) {
  const particles = []
  const particleCount = 12

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    const angle = (i / particleCount) * Math.PI * 2
    const velocity = 50 + Math.random() * 50
    const size = 3 + Math.random() * 4

    particle.style.width = size + "px"
    particle.style.height = size + "px"
    particle.style.left = x + "px"
    particle.style.top = y + "px"
    particle.style.background = `hsl(${210 + Math.random() * 30}, 70%, 60%)`

    container.appendChild(particle)

    // Animate particle
    const endX = x + Math.cos(angle) * velocity
    const endY = y + Math.sin(angle) * velocity

    particle.style.transform = `translate(${endX - x}px, ${endY - y}px)`
    particle.style.opacity = "0"
    particle.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"

    setTimeout(() => {
      particle.remove()
    }, 800)
  }
}

// Interactive Background Dots
function initInteractiveBackground() {
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const interactiveBg = document.createElement("div")
    interactiveBg.className = "interactive-bg"
    section.style.position = "relative"
    section.appendChild(interactiveBg)

    section.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Create temporary dot
      const dot = document.createElement("div")
      dot.className = "bg-dot active"
      dot.style.left = x + "px"
      dot.style.top = y + "px"

      interactiveBg.appendChild(dot)

      setTimeout(() => {
        dot.remove()
      }, 1000)
    })
  })
}

// Enhanced Statistics Interaction
function initInteractiveStats() {
  const statItems = document.querySelectorAll(".stat-item, .stat-card, .stat-box")

  statItems.forEach((stat) => {
    stat.classList.add("stat-interactive")

    stat.addEventListener("click", () => {
      // Animate the number
      const numberElement = stat.querySelector(".stat-number, .stat-value")
      if (numberElement) {
        const originalValue = numberElement.textContent
        const targetValue = numberElement.getAttribute("data-target") || originalValue

        // Create counting animation
        animateCountUp(
          numberElement,
          0,
          Number.parseFloat(targetValue),
          originalValue.includes("%") ? "%" : originalValue.includes("K") ? "K+" : "",
        )
      }

      // Add visual feedback
      stat.style.transform = "scale(1.1)"
      setTimeout(() => {
        stat.style.transform = ""
      }, 200)
    })
  })
}

function animateCountUp(element, start, end, suffix) {
  const duration = 1000
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const current = start + (end - start) * easeOutCubic(progress)
    element.textContent = Math.floor(current) + suffix

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

// Enhanced Device Interactions
function initDeviceInteractions() {
  const deviceMockups = document.querySelectorAll(".device-mockup")

  deviceMockups.forEach((device) => {
    device.addEventListener("mouseenter", () => {
      const lights = device.querySelectorAll(".light")
      lights.forEach((light, index) => {
        setTimeout(() => {
          light.style.animation = "lightBlink 0.3s ease"
        }, index * 100)
      })

      // Add screen glow effect
      const screen = device.querySelector(".screen")
      if (screen) {
        screen.style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.6)"
      }
    })

    device.addEventListener("mouseleave", () => {
      const screen = device.querySelector(".screen")
      if (screen) {
        screen.style.boxShadow = ""
      }
    })
  })
}

// Magnetic Elements Effect
function initMagneticElements() {
  const magneticElements = document.querySelectorAll(".btn-primary, .btn-secondary, .nav-logo")

  magneticElements.forEach((element) => {
    element.classList.add("magnetic-element")

    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`
    })

    element.addEventListener("mouseleave", () => {
      element.style.transform = ""
    })
  })
}

// Initialize all enhanced interactions
document.addEventListener("DOMContentLoaded", () => {
  // Wait for existing initialization to complete
  setTimeout(() => {
    initCardTiltEffects()
    initInteractiveBackground()
    initInteractiveStats()
    initDeviceInteractions()
    initMagneticElements()

    console.log("Enhanced interactive features initialized!")
  }, 1000)
})

// Add floating orbs to hero section
function addFloatingOrbs() {
  const heroVisual = document.querySelector(".hero-visual")
  if (heroVisual) {
    heroVisual.classList.add("hero-visual-enhanced")

    for (let i = 1; i <= 4; i++) {
      const orb = document.createElement("div")
      orb.className = `floating-orb orb-${i}`
      heroVisual.appendChild(orb)
    }
  }
}

// Initialize floating orbs
window.addEventListener("load", () => {
  addFloatingOrbs()
})
