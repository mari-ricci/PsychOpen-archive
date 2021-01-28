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
    var begin = 0;
    if ($('#content').length !== 0) {
        begin = $('#content').offset().top;
    }
    $('html, body').animate({scrollTop: begin}, '300');
});

if($('.toc').length !==0) {
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '#content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h2, h3, h4',
// Element to add the positionFixedClass to.
        positionFixedSelector: '.toc',
// Fixed position class to add to make sidebar fixed after scrolling
// down past the fixedSidebarOffset.
        positionFixedClass: 'is-position-fixed',
// fixedSidebarOffset can be any number but by default is set
// to auto which sets the fixedSidebarOffset to the sidebar
// element's offsetTop from the top of the document on init.
        fixedSidebarOffset: '250',
        // How many heading levels should not be collapsed.
// For example, number 6 will show everything since
// there are only 6 heading levels and number 0 will collapse them all.
// The sections that are hidden will open
// and close as you scroll to headings within them.
        collapseDepth: 3,
        headingsOffset: 100,
        hasInnerContainers: true,
        // Optional callback to change heading labels.
// For example it can be used to cut down and put ellipses on multiline headings you deem too long.
// Called each time a heading is parsed. Expects a string in return, the modified label to display.
        headingLabelCallback: function truncate(str){
            str = str.trim().replace(/\s\s+/g, ' ');
            var strt = (str.length > 35) ? str.substr(0, 35).trimEnd() + "..." : str;
            return strt;
        }
    });
}



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
    const originalVal = (checked_value.length !== 0)?checked_value:$('input[name="defaultSearchstring"]').val();
    //append user-entered search string to concatenated string of all checked boxes
    this.querySelector('input[name="q"]').value = (originalVal.length !== 0)?searchString + " " + originalVal:searchString;
    // console.log(this.querySelector('input[name="q"]').value);
    // console.log(this);
    /* submit the form, but make sure not to clear it, because we opened the result in a new window & the user might want to change their query and resubmit */
    this.submit();
    // console.log(this.querySelector('input[name="q"]').value);
    return false;
}

// <!--    fetch('https://www.lifp.de/assets/collapsible-footer/index.php?framework=bootstrap&lang=de').then(function (response) {-->
// <!--        // The API call was successful!-->
//     <!--        return response.text();-->
//     <!--    }).then(function (html) {-->
// <!--        // This is the HTML from our response as a text string-->
//     <!--        console.log(html)-->
//     <!--        $('footer').append(html)-->
//     <!--    }).catch(function (err) {-->
// <!--        // There was an error-->
// <!--        console.warn('Something went wrong.', err);-->
// <!--    });-->