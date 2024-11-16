document.addEventListener('DOMContentLoaded', function() {
    
    // Get Involved Section 
    const getInvolvedSection = document.querySelector('#get-involved');
    if (getInvolvedSection) {
        getInvolvedSection.addEventListener('click', function() {
            alert('Thank you for your interest in getting involved with Wesleyan Entrepreneurs!');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover effects
    const navLinkElements = document.querySelectorAll('nav ul li a');
    navLinkElements.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#D72121';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#F5F5F7';
        });
    });

    // Modal popup
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('myBtn');
    const span = document.getElementsByClassName('close')[0];

    if (btn) {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (span) {
        span.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate="fade-in"]').forEach((element) => {
        observer.observe(element);
    });

    // Image modal functionality
    const images = document.querySelectorAll('.image-wrapper img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = createImageModal(img.src, img.alt);
            document.body.appendChild(modal);
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('#nav-links');
    const body = document.querySelector('body');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('show');
            body.style.overflow = navLinks.classList.contains('show') ? 'hidden' : 'auto';
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('show');
                body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('show')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('show');
                body.style.overflow = 'auto';
            }
        });
    }
});

function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${src}" alt="${alt}">
            <p>${alt}</p>
        </div>
    `;

    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    return modal;
}
