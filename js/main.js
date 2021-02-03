// BACK TO TOP BUTTON
const btn = $('#BackToTopButton');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    let begin = 0;
    if ($('#content').length !== 0) {
        begin = $('#content').offset().top;
    }
    $('html, body').animate({scrollTop: begin}, 300);
});

// SIDEBAR STICKY TABLE OF CONTENTS from https://github.com/tscanlin/tocbot
if($('.toc').length !==0) {
    tocbot.init({
        tocSelector: '.toc',// Where to render the table of contents.
        contentSelector: '#content',// Where to grab the headings to build the table of contents.
        headingSelector: 'h2, h3, h4',// Which headings to grab inside of the contentSelector element.
        positionFixedSelector: '.toc',// Element to add the positionFixedClass to.
        positionFixedClass: 'is-position-fixed',// Fixed position class to add to make sidebar fixed after scrolling down past the fixedSidebarOffset.
        fixedSidebarOffset: '250',// fixedSidebarOffset can be any number but by default is set to auto which sets the fixedSidebarOffset to the sidebar element's offsetTop from the top of the document on init.
        collapseDepth: 3,// How many heading levels should not be collapsed.
        headingsOffset: 100,
        hasInnerContainers: true,
        headingLabelCallback: function truncate(str){ // Optional callback to change heading labels.
            str = str.trim().replace(/\s\s+/g, ' ');
            return (str.length > 35) ? str.substr(0, 35).trimEnd() + "..." : str;}
    });
}

// SEARCH BAR
let forms = document.forms;
for (x = 0; x < forms.length; x++) {
    let searchform = forms[ x ];
    try {
        searchform.addEventListener("submit", submitFn, false);
    } catch (e) {
        searchform.attachEvent("onsubmit", submitFn); //IE8
    }
}
function submitFn(event) {
    /* we prevent the regular html submit, because it would clear the form on submission. We'll submit via JS further down and won't run the clear function: */
    event.preventDefault();
    const checked_value =  $('input[type="radio"]:checked').val();
    //get value the user entered into the search box via keyboard
    const searchString = $('input[type="search"]').val();
    //get the default value of the hidden q input, which usually contains the journal name and similar things that should always be true for this search box:
    const originalVal = (typeof checked_value !== "undefined")?checked_value:$('input[name="defaultSearchstring"]').val();
    //append user-entered search string to concatenated string of all checked boxes
    this.querySelector('input[name="q"]').value = (originalVal.length !== 0)?searchString + " " + originalVal:searchString;
    /* submit the form, but make sure not to clear it, because we opened the result in a new window & the user might want to change their query and resubmit */
    return this.submit();
}