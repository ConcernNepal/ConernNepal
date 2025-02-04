

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


var typed = new Typed(".typing-text", {
    strings: ["We build power for people who wants to change the world."],
    
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        this.reset();
    });





// JavaScript to handle the tab switching logic

const tabs = document.querySelectorAll('.tab');
const serviceCards = document.querySelectorAll('.service-card');

// Function to switch tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Get target category
        const target = tab.getAttribute('data-target');

        // Show/Hide Service Cards based on the selected tab
        serviceCards.forEach(card => {
            if (target === 'all' || card.getAttribute('data-category') === target) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});