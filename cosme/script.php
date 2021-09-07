<!-- // Modernizr and jQuery -->
<script src="js/vendor/modernizr-2.8.3.min.js"></script>
    <script src="js/vendor/jquery-1.12.0.min.js"></script>
    <script src="js/vendor/fastclick.js"></script>



    <!-- JS -->
    <script src="js/plugins/jquery-ui.min.js"></script>
    <script src="js/plugins/bootstrap.min.js"></script>
    <script src="js/plugins/awemenu.min.js"></script>
    <script src="js/plugins/jquery.fittext.js"></script>
    <script src="js/plugins/masonry.pkgd.min.js"></script>
    <script src="js/plugins/imagesloaded.pkgd.min.js"></script>
    <script src="js/plugins/isotope.pkgd.min.js"></script>
    <script src="js/plugins/slick.min.js"></script>
    <script src="js/plugins/jquery.countdown.min.js"></script>
    <script src="js/plugins/jquery.hoverdir.js"></script>
    <script src="js/plugins/select2.min.js"></script>
    <script src="js/plugins/jquery.magnific-popup.min.js"></script>

    <script src="js/main.js"></script>


   
<script>
 //Get the button:
 mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(document).ready(function () {
$('.navbar-light .dmenu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });
}); 
 
    $(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});


        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>