// Source file for custom JavaScript outside of Foundation framework.
// The site itself includes a minified version.

// Start Foundation app
$(document).foundation();

// Array list of all the different pages of content (divs)
var contentArr = [
    '#home_content'
    , '#smitha_content'
    , '#elana_content'
    , '#patient_content'
    , '#forms_content'
    , '#contact_content'
    , '#rxrefill_content'
];

initialize();
$('.copyright_year').html((new Date).getFullYear());



// ***************************************************************************
// *                            jQuery bind events                           *
// ***************************************************************************
$('#home_lnk, #path_lnk, #home_lnk_footer').on('click', function() {
    initialize();
    ga('send', 'event', 'home_lnk', 'click', 'nav_links');
});

$('#smitha_lnk').on('click', function() {
    loadSBInfo();
});

$('#elana_lnk').on('click', function() {
    setLogoInfoText("elana");
    showHideContent('#elana_content');
    ga('send', 'event', 'elana_lnk', 'click', 'nav_links');
});

$('#resources_lnk, #resources_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#patient_content');
    ga('send', 'event', 'resources_lnk', 'click', 'nav_links');
});

$('#forms_lnk, #forms_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#forms_content');
    ga('send', 'event', 'forms_lnk', 'click', 'nav_links');
});

$('#contact_lnk, #contact_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#contact_content');
    ga('send', 'event', 'contact_lnk', 'click', 'nav_links');
});

$('#rxrefill_lnk, #rxrefill_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#rxrefill_content');
    ga('send', 'event', 'rxrefill_lnk', 'click', 'nav_links');
});

$('a').on('click', 'a.rxrefill_lnk_smitha', function() {
    setLogoInfoText();
    showHideContent('#rxrefill_content');
    ga('send', 'event', 'rxrefill_lnk', 'click', 'nav_links');
});



// ***************************************************************************
// *                            Functions here                               *
// ***************************************************************************
// Show div passed in. Hide other divs.
function showHideContent(toShow) {
    $(toShow).show();
    $.each(contentArr, function(key, value) {
        if (toShow !== value) {
            $(value).hide();
        }
    });
}

// Set content on initial page landing and clicking on home buttons
function initialize() {
    setLogoInfoText("home");
    showHideContent('#home_content');
}

function setLogoInfoText(whichPage) {
    var whichText = "550 Pharr Rd NE, Suite 605<br>Atlanta, GA  30305<br>(O) <a href=\"tel:+14042355982\">404.235.5982</a>";
    switch(whichPage) {
        case "home":
            whichText += "<br>(F) 678.705.2756";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#111;&#102;&#032;&#065;&#116;&#108;&#097;&#110;&#116;&#097;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#115;&#098;&#104;&#097;&#110;&#100;&#097;&#114;&#105;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#115;&#098;&#104;&#097;&#110;&#100;&#097;&#114;&#105;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#101;&#122;&#105;&#109;&#097;&#110;&#100;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#101;&#122;&#105;&#109;&#097;&#110;&#100;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            whichText += "<br><a href=\"#\" onclick=\"loadSBInfo(); goToScheduling();\">Online Scheduling for Dr. Bhandari</a>";
            whichText += "<br><a href=\"#\" class=\"rxrefill_lnk_smitha\">Medication Refill Request Form</a>";
            break;
        case "smitha":
            whichText += "<br>(C) <a href=\"tel:+14049173256\">404.917.3256</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#115;&#098;&#104;&#097;&#110;&#100;&#097;&#114;&#105;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#115;&#098;&#104;&#097;&#110;&#100;&#097;&#114;&#105;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            whichText += "<br><a href=\"#\" onclick=\"goToScheduling();\">Online Scheduling</a>";
            //whichText += "<br><a href=\"#\" onclick=\"goToMedReqForm();\">Medication Refill Request Form</a>";
            break;
        case "elana":
            whichText += "<br>(C) <a href=\"tel:+14046646398\">404.664.6398</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#101;&#122;&#105;&#109;&#097;&#110;&#100;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#101;&#122;&#105;&#109;&#097;&#110;&#100;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        default:
            whichText = "";
    }
    $('#pga_logo_info').html(whichText);
}

function loadSBInfo() {
    setLogoInfoText("smitha");
    showHideContent('#smitha_content');
    ga('send', 'event', 'smitha_lnk', 'click', 'nav_links');
}

function goToScheduling() {
    event.preventDefault();
    $('#sbscheduling').scrollView();
    ga('send', 'event', 'sbscheduling', 'click', 'nav_links');
}

function goToMedReqForm() {
    event.preventDefault();
    $('#medreqform').scrollView();
    ga('send', 'event', 'medreqform', 'click', 'nav_links');
}

// Courtesy of https://github.com/web-design-weekly/scroll-to-position-demo
$.fn.scrollView = function() {
    return this.each(function () {
        $('html, body').animate({
          scrollTop: $(this).offset().top
        }, 500);
    });
}