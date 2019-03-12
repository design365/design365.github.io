 
// search
var $searchForm = $('#search-form');
var $searchInput = $('#search-input');
var $searchIcon = $('#search-icon');

function performSearch() {
}

$searchIcon.on('click', performSearch);
$searchForm.on('submit', performSearch);

// Navbar scrolling
var oldScrollTop = $(window).scrollTop();
//$(window).on('scroll', function (e) {
//    if ($(window).width() >= 768) {
//        if ($(window).scrollTop() > 85) {
//
//            if (path !== '/download/' && path !== '/download/videoder-for-android' && path !== '/download/videoder-for-pc' && path !== '/steps-to-download-videoder-on-pc') {
//                $('#scrolled-nav-desktop:hidden').slideDown(500);
//            }
//        } else if ($(window).scrollTop() <= 85 && oldScrollTop > 85) {
//            $('#scrolled-nav-desktop:visible').hide();
//        }
//    } else {
//        if ($(window).scrollTop() > 300) {
//            if (path !== '/download/' && path !== '/download/videoder-for-android' && path !== '/download/videoder-for-pc' && path !== '/steps-to-download-videoder-on-pc') {
//                $('#scrolled-nav-mobile:hidden').slideDown(500);
//            }
//        } else if ($(window).scrollTop() <= 300 && oldScrollTop > 300) {
//            $('#scrolled-nav-mobile:visible').hide();
//        }
//    }
//    oldScrollTop = $(window).scrollTop();
//});

// Subscription Form
var subscriptionCallRunning = false;
$('.subscription-form').submit(function (e) {
   
});

// Add slideDown animation to Bootstrap dropdown when expanding.
var $dropDown = $('.dropdown');
$dropDown.on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$dropDown.on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(100);
});

// Tracking
var eventCategories = {
    ANDROID_DOWNLOAD_BUTTON: "Android Download Button",
    MAC_DOWNLOAD_BUTTON: "Mac Download Button",
    WINDOWS_DOWNLOAD_BUTTON: "Windows Download Button",
    RESTART_DOWNLOAD: "Restart Download",
    PREVIEW_DOWNLOAD_PAGE: "Preview Download Page",
    TOP_NAVBAR: "Top Navbar",
    PAGES: "Pages"
};

$(".android-download-btn").on("click", function () {
    if ($(this).hasClass('header-button')) {
        ga('send', 'event', eventCategories.ANDROID_DOWNLOAD_BUTTON, "Header", locale);
    } else if ($(this).hasClass('content-button')) {
        ga('send', 'event', eventCategories.ANDROID_DOWNLOAD_BUTTON, "Content", locale);
    } else if ($(this).hasClass('footer-button')) {
        ga('send', 'event', eventCategories.ANDROID_DOWNLOAD_BUTTON, "Footer", locale);
    } else if ($(this).hasClass('overlay-button')) {
        ga('send', 'event', eventCategories.ANDROID_DOWNLOAD_BUTTON, "Overlay", locale);
    }
});

$(".mac-download-btn").on("click", function () {
    if ($(this).hasClass('header-button')) {
        ga('send', 'event', eventCategories.MAC_DOWNLOAD_BUTTON, "Header", locale);
    } else if ($(this).hasClass('content-button')) {
        ga('send', 'event', eventCategories.MAC_DOWNLOAD_BUTTON, "Content", locale);
    } else if ($(this).hasClass('footer-button')) {
        ga('send', 'event', eventCategories.MAC_DOWNLOAD_BUTTON, "Footer", locale);
    }
});

$(".windows-download-btn").on("click", function () {
    if ($(this).hasClass('header-button')) {
        ga('send', 'event', eventCategories.WINDOWS_DOWNLOAD_BUTTON, "Header", locale);
    } else if ($(this).hasClass('content-button')) {
        ga('send', 'event', eventCategories.WINDOWS_DOWNLOAD_BUTTON, "Content", locale);
    } else if ($(this).hasClass('footer-button')) {
        ga('send', 'event', eventCategories.WINDOWS_DOWNLOAD_BUTTON, "Footer", locale);
    }
});


$("#restart-download-button").on('click', function () {
    if ($(this).hasClass('android')) {
        ga('send', 'event', eventCategories.RESTART_DOWNLOAD, "Android");
    } else if ($(this).hasClass('windows')) {
        ga('send', 'event', eventCategories.RESTART_DOWNLOAD, "Windows");
    } else if ($(this).hasClass('mac')) {
        ga('send', 'event', eventCategories.RESTART_DOWNLOAD, "Mac");
    } else {
        ga('send', 'event', eventCategories.RESTART_DOWNLOAD);
    }
});

