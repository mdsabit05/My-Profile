/* ===================================================
   PORTFOLIO — Md Sabit Raza
   index.js — Navigation & interactivity
   =================================================== */

(function () {
    'use strict';

    const menuToggle    = document.getElementById('menuToggle');
    const sidebar       = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose  = document.getElementById('sidebarClose');
    const sidebarLinks  = document.querySelectorAll('.sidebar-link');
    const header        = document.getElementById('site-header');

    // ── Sidebar open / close ──────────────────────────
    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        menuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', closeSidebar);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // ── Header border on scroll ───────────────────────
    window.addEventListener('scroll', function () {
        if (window.scrollY > 8) {
            header.style.borderBottomColor = 'var(--border)';
        } else {
            header.style.borderBottomColor = 'transparent';
        }
    }, { passive: true });

    // ── Highlight active nav link on scroll ──────────
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    function updateActiveLink() {
        var scrollPos = window.scrollY + 80;
        var current = '';

        sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos) {
                current = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.style.color = '';
            var href = link.getAttribute('href');
            if (href === '#' + current) {
                link.style.color = 'var(--accent)';
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

}());
