// Source file for custom JavaScript outside of Foundation framework.

// Start Foundation app
$(document).foundation();

// Array list of all the different pages of content (divs)
var contentArr = [
    '#home_content',
    '#smitha_content',
	'#alejandra_content',
    '#trevor_content',
    '#tyler_content',
    '#palav_content',
    '#kerry_content',
    '#kaylee_content',
    '#kate_content',
    '#sindhura_content',
    '#elana_content',    
    '#resources_content',
    '#forms_content',
    '#contact_content',
    '#rxrefill_content',
    '#billing_content',
    '#new_patient_inquiry_content'
];


$(function() {
    initialize();
    $('.copyright_year').html((new Date).getFullYear());
});



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

$('#alejandra_lnk').on('click', function() {
    setLogoInfoText("alejandra");
    showHideContent('#alejandra_content', 'alejandra_lnk');
});

$('#tyler_lnk').on('click', function() {
    setLogoInfoText("tyler");
    showHideContent('#tyler_content', 'tyler_lnk');
});

$('#palav_lnk').on('click', function() {
    setLogoInfoText("palav");
    showHideContent('#palav_content', 'palav_lnk');
});

$('#kerry_lnk').on('click', function() {
    setLogoInfoText("kerry");
    showHideContent('#kerry_content', 'kerry_lnk');
});

$('#kaylee_lnk').on('click', function() {
    setLogoInfoText("kaylee");
    showHideContent('#kaylee_content', 'kaylee_lnk');
});

$('#kate_lnk').on('click', function() {
    setLogoInfoText("kate");
    showHideContent('#kate_content', 'kate_lnk');
});

$('#trevor_lnk').on('click', function() {
    setLogoInfoText("trevor");
    showHideContent('#trevor_content', 'trevor_lnk');
});

$('#sindhura_lnk').on('click', function() {
    setLogoInfoText("sindhura");
    showHideContent('#sindhura_content', 'sindhura_lnk');
});

$('#elana_lnk').on('click', function() {
    setLogoInfoText("elana");
    showHideContent('#elana_content', 'elana_lnk');
});

$('#new_patient_inquiry_lnk').on('click', function() {
    setLogoInfoText();
    showHideContent('#new_patient_inquiry_content', 'new_patient_inquiry_lnk');
});

$('#resources_lnk, #resources_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#resources_content', 'resources_lnk');
});

$('#forms_lnk, #forms_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#forms_content', 'forms_lnk');
});

$('#contact_lnk, #contact_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#contact_content', 'contact_lnk');
});

$('#rxrefill_lnk, #rxrefill_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#rxrefill_content', 'rxrefill_lnk');
});

$('a').on('click', 'a.rxrefill_lnk_smitha', function() {
    setLogoInfoText();
    showHideContent('#rxrefill_content', 'rxrefill_lnk');
});

$('#billing_lnk, #billing_lnk_footer').on('click', function() {
    setLogoInfoText();
    showHideContent('#billing_content', 'billing_lnk');
});





// ***************************************************************************
// *                            Functions here                               *
// ***************************************************************************
// Show div passed in. Hide other divs.
function showHideContent(toShowContent, toShowLink) {
    $(toShowContent).show();
    $.each(contentArr, function(key, value) {
        if (toShowContent !== value) {
            $(value).hide();
        }
    });
    
    ga('send', 'event', toShowLink, 'click', 'nav_links');
}

// Set content on initial page landing and clicking on home buttons
function initialize() {
    setLogoInfoText("home");
    showHideContent('#home_content', 'home_lnk');
}

function setLogoInfoText(whichPage) {
    var whichText = "550 Pharr Rd NE, Suite 605<br>Atlanta, GA  30305<br>(O) <a href=\"tel:+14042355982\">404.235.5982</a>";
    switch(whichPage) {
        case "home":
            whichText += "<br>(F) 678.705.2756";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#111;&#102;&#032;&#065;&#116;&#108;&#097;&#110;&#116;&#097;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "smitha":
            whichText += "<br>(C) <a href=\"tel:+14049173256\">404.917.3256</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#115;&#098;&#104;&#097;&#110;&#100;&#097;&#114;&#105;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#115;&#098;&#104;&#097;&#110;&#100;&#097;&#114;&#105;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
		case "alejandra":
			whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#097;&#103;&#114;&#117;&#108;&#108;&#111;&#110;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#097;&#103;&#114;&#117;&#108;&#108;&#111;&#110;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
			break;
        case "tyler":
            whichText += "<br>(C) <a href=\"tel:+18505599757\">850.559.9757</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#116;&#102;&#105;&#110;&#107;&#108;&#101;&#097;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#116;&#102;&#105;&#110;&#107;&#108;&#101;&#097;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "palav":
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#112;&#109;&#101;&#104;&#116;&#097;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#112;&#109;&#101;&#104;&#116;&#097;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "kerry":
            whichText += "<br>(C) <a href=\"tel:+14049199867\">404.919.9867</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#107;&#115;&#104;&#101;&#097;&#104;&#097;&#110;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#107;&#115;&#104;&#101;&#097;&#104;&#097;&#110;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "kaylee":
            whichText += "<br>(C) <a href=\"tel:+16786655465\">678.665.5465</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#107;&#115;&#105;&#109;&#111;&#110;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#107;&#115;&#105;&#109;&#111;&#110;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "kate":
            whichText += "<br>(C) <a href=\"tel:+16784293722\">678.429.3722</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#107;&#115;&#105;&#108;&#118;&#101;&#114;&#105;&#111;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#107;&#115;&#105;&#108;&#118;&#101;&#114;&#105;&#111;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "trevor":
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#116;&#115;&#116;&#114;&#105;&#099;&#107;&#108;&#097;&#110;&#100;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#116;&#115;&#116;&#114;&#105;&#099;&#107;&#108;&#097;&#110;&#100;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
            break;
        case "sindhura":
            whichText += "<br>(C) <a href=\"tel:+16782057406\">678.205.7406</a>";
            whichText += "<br><a href=\"&#109;&#097;&#105;&#108;&#116;&#111;:&#115;&#115;&#117;&#114;&#121;&#097;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#080;&#097;&#116;&#104;&#032;&#071;&#114;&#111;&#117;&#112;&#032;&#073;&#110;&#113;&#117;&#105;&#114;&#121;\">&#115;&#115;&#117;&#114;&#121;&#097;&#064;&#112;&#097;&#116;&#104;&#103;&#114;&#111;&#117;&#112;&#097;&#116;&#108;&#046;&#099;&#111;&#109;</a>";
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
    showHideContent('#smitha_content', 'smitha_lnk');
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
