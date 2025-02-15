(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

// document.addEventListener("DOMContentLoaded", function () {
//     // Hide content initially
//     document.body.style.display = "none";

//     // Ask for authentication input
//     let userInput = prompt("Enter the access code:");

//     // Define correct passwords and access levels (Example)
//     const accessLevels = {
//         "admin123": "admin",
//         "user123": "user"
//     };

//     if (accessLevels[userInput]) {
//         document.body.style.display = "block"; // Show content

//         if (accessLevels[userInput] === "user") {
//             document.querySelectorAll(".admin-only").forEach(el => el.style.display = "none");
//         }
//     } else {
//         document.body.innerHTML = "<h2>Invalid Access. Please try again later.</h2>";
//         document.body.style.display = "block";
//     }
// });

document.body.style.display = "none"; // Hide content initially
/** TWO INPUT PROMPT */
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.display = "none"; // Hide content initially

    // Predefined users with access levels
    const users = {
        // "": { password: "", role: "admin" },
        // "admin": { password: "admin123", role: "admin" },
        // "user1": { password: "user123", role: "user" },
        "guest": { password: "guest123", role: "guest" },
        "": { password: "", role: "user" },
        "hariom": { password: "hari", role: "admin" },
        "shivani": { password: "Shiv@@0", role: "admin" },
        "lokesh": { password: "Lokesh@97", role: "user" },
        "gayatri": { password: "Gayatri@99", role: "admin" },
        "renuka": { password: "Renuka@96", role: "admin" },
        "savita": { password: "savita86", role: "admin" },
    };

    // Prompt for username and password
    // let username = prompt("Enter your invitation id:");
    username = "hariom";
    
    
    if (users[username]) {
        let password = prompt("Enter your invitation code:");
       
        if (users[username].password === password) {
            document.body.style.display = "block"; // Show content

            let role = users[username].role;

            // Hide content based on role
            if (role === "user" || role === "guest") {
                document.querySelectorAll(".admin-only").forEach(el => el.style.display = "none");
            }
            if (role === "guest") {
                document.querySelectorAll(".user-only").forEach(el => el.style.display = "none");
            }
        } else {
            document.body.innerHTML = "<h2>Opppps! Seems like you are not invited...</h2>";
            document.body.style.display = "block";
        }
    } else {
        document.body.innerHTML = "<h2>Opppps! Seems like you are not invited...</h2>";
        document.body.style.display = "block";
        
    }
});



