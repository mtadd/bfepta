//=require bootstrap

$( document ).ready( function() {
    $('ul.navbar-nav li.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu')
                .stop(true, true).delay(100).fadeIn(300);
        },
        function() {
            $(this).find('.dropdown-menu')
                .stop(true, true).delay(100).fadeOut(300);
    });
});

function trackOutboundLink(url) {
    gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': url,
        'transport_type': 'beacon',
        'event_callback': function() {document.location = url; }
    });
}

function trackDownloadLink(url) {
    gtag('event', 'click', {
        'event_category': 'download',
        'event_label': url,
        'event_callback': function() {document.location = url; }
    });
}
