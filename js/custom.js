function navWidth() {
    // ensure the affix element maintains it width
    var $affixElement = $('#breadcrumb');
    $affixElement.width($affixElement.parent().width());
}

function sideWidth() {
    // ensure the affix element maintains it width
    var affix = $('#sidenav');
    var width = affix.width();
    affix.width(width);
}


$(document).ready(function () {
    navWidth();
    sideWidth();

    // Call on scroll or resize
    $(window).on('scroll resize', function() {
      navWidth();
      sideWidth();
    });
});

