// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Shri Engineering and Steel - Company Profile Loaded');

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add fade-in animation class
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.8s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for cover page
    const coverPage = document.querySelector('.cover-page');
    if (coverPage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            coverPage.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Image hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Feature box animations
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';

        setTimeout(() => {
            box.style.transition = 'all 0.6s ease';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Product item hover effects
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });

    // Offering item animations
    const offeringItems = document.querySelectorAll('.offering-item');
    offeringItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });

    // Print functionality
    window.printProfile = function() {
        window.print();
    };

    // Generate PDF functionality (requires additional library like html2pdf.js)
    window.generatePDF = function() {
        alert('PDF generation feature. Please use browser Print > Save as PDF');
        window.print();
    };

    // Navigation helper
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Add navigation menu dynamically
    createNavigationMenu();
});

// Create floating navigation menu
function createNavigationMenu() {
    const nav = document.createElement('nav');
    nav.className = 'floating-nav';
    nav.innerHTML = `
        <button class="nav-toggle" onclick="toggleNav()">☰</button>
        <div class="nav-menu" id="navMenu">
            <a href="#cover">Home</a>
            <a href="#about">About</a>
            <a href="#vision-mission">Vision & Mission</a>
            <a href="#water-towers">Water Towers</a>
            <a href="#solar-structures">Solar Structures</a>
            <a href="#electrical-poles">Electrical Poles</a>
            <a href="#why-choose">Why Choose Us</a>
            <a href="#fabrication">Fabrication</a>
            <a href="#products-list">Products</a>
            <a href="#contact">Contact</a>
        </div>
    `;

    // Add navigation styles
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        .floating-nav {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .nav-toggle {
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            color: white;
            border: none;
            padding: 15px 20px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }

        .nav-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }

        .nav-menu {
            display: none;
            position: absolute;
            top: 60px;
            right: 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            padding: 20px;
            min-width: 200px;
        }

        .nav-menu.active {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .nav-menu a {
            color: #1e3a8a;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 5px;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .nav-menu a:hover {
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            color: white;
            transform: translateX(5px);
        }

        @media print {
            .floating-nav {
                display: none;
            }
        }
    `;
    document.head.appendChild(navStyle);
    document.body.appendChild(nav);
}

// Toggle navigation menu
function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close nav menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.floating-nav');
    const navMenu = document.getElementById('navMenu');

    if (nav && navMenu && !nav.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Scroll progress indicator
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // Create progress bar if it doesn't exist
    let progressBar = document.getElementById('scrollProgress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scrollProgress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #7c3aed);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = scrolled + '%';
});

// Image lazy loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console greeting
console.log(`
╔════════════════════════════════════════════╗
║   SHRI ENGINEERING & STEEL                 ║
║   Engineering Excellence in Steel          ║
║   Fabrication & Infrastructure Solutions   ║
╚════════════════════════════════════════════╝
`);
