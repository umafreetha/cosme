<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>cosme</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CLato:400,400italic,700,700italic%7CPlayfair+Display:400,400italic,700italic,700%7CHind:400,700&amp;subset=latin,latin-ext" rel="stylesheet" type="text/css">

    <!-- // CSS -->
    <link rel="stylesheet" href="css/fonts/font-awesome.css">
    <link rel="stylesheet" href="css/vendor/slick.css">
    <link rel="stylesheet" href="css/vendor/magnific-popup.css">
    <link rel="stylesheet" href="css/vendor/select2.css">
    <link rel="stylesheet" href="css/vendor/awemenu.css">

    <link rel="stylesheet" type="text/css" href="css/main.css">

    <!-- <link rel="stylesheet" href="https://fontawesome.io/assets/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"> -->
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
 .navbar{
     background: #fff;
     padding-top: 0;
     padding-bottom: 0;
     box-shadow: 1px 3px 4px 0 #adadad33;
}
 .navbar-light .navbar-brand {
     color: #2196F3;
}
 .navbar-light .navbar-nav .nav-link {
     color: #1ebdc2;
}
 .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
     color: #1ebdc2;
}
 .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
     color: #fff;
}
 .navbar-light .navbar-nav .nav-link{
     padding-top: 22px;
     padding-bottom: 22px;
     transition: 0.3s;
     padding-left: 24px;
     padding-right: 24px;
         font-size: 14px;
}
 .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover{
     background: #1ebdc2;
     transition: 0.3s;
}
.dropdown-item:focus, .dropdown-item:hover {
    color: #fff;
    text-decoration: none;
    background-color: #1ebdc2 !important;
}
.sm-menu{
    border-radius: 0px;
    border: 0px;
    top: 97%;
    box-shadow: rgba(173, 173, 173, 0.2) 1px 3px 4px 0px;
}
.dropdown-item {
    color: #3c3c3c;
        font-size: 14px;
}
.dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #2196F3;
}
.navbar-toggler{
    outline: none !important;
}
.navbar-tog{
    color: #1ebdc2;
}
.megamenu-li {
	position: static;
}

.megamenu {
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
	padding: 15px;
}
.megamenu h6{
    margin-left: 21px;
}
.megamenu i{
    width: 20px;
}


</style>
</head>



<body>
<nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container">
        <a class="navbar-brand" href="#">Mega Menu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span> 
        </button>
        <div class="collapse navbar-collapse" id="mobile_nav">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right">
        </ul>
        <ul class="navbar-nav navbar-light">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
            <li class="nav-item dmenu dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
                </a>
                <div class="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Software Development</a>
                    <a class="dropdown-item" href="#">Web Designing & Development</a>
                    <a class="dropdown-item" href="#">Mobile Application</a>
                    <a class="dropdown-item" href="#">Business Solutions & Business Process</a>
                    <a class="dropdown-item" href="#">Digital Marketing & SEO Services</a>
                    <a class="dropdown-item" href="#">Web Hosting & Maintenance</a>
                    <a class="dropdown-item" href="#">Cyber Security</a>
                    <a class="dropdown-item" href="#">Block Chain Implementation</a>
                    <a class="dropdown-item" href="#">Big Data</a>
                </div>
            </li>
            <!--========-->
            <li class="nav-item dropdown megamenu-li dmenu">
                <a class="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Services</a>
                <div class="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
                    <div class="row">
                        <div class="col-lg-6">
                            <h6>Ecommerce</h6>
                            <a class="dropdown-item" href="#"><i class="fab fa-magento"></i> Magento Development</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-magento"></i> Magento 2 Migration</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-magento"></i> Odoo ERP</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-magento"></i> Mobile Commerce</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-magento"></i> CRM for Commerce</a>
                        </div>
                       <div class="col-lg-6">
                            <h6>LAMP Technology</h6>
                            <a class="dropdown-item" href="#"><i class="fab fa-php"></i> PHP Website Development</a>
                            <a class="dropdown-item" href="#"><i class="fas fa-circle"></i> Phalcon Development</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-laravel"></i> Laravel Development</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-wordpress-simple"></i> WordPress Development</a>
                            <a class="dropdown-item" href="#"><i class="fab fa-php"></i> Symfony Development</a>
                        </div>
                        <
                    </div>
                </div>
            </li>
            <!--=========-->
            <li class="nav-item"><a class="nav-link" href="<?php echo siteURL;?>portfolio.php">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="<?php echo siteURL;?>career.php">Careers</a></li>
            <li class="nav-item"><a class="nav-link" href="<?php echo siteURL;?>contact-us.php">Contact us</a></li>
   
        </ul>
        </div>
    </div>
</nav>


<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://dummyimage.com/1200x400/1EBDC2/ffffff&text=Bootstrap+Mega+Menu" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://dummyimage.com/1200x400/1EBDC2/ffffff&text=Bootstrap+Mega+Menu" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://dummyimage.com/1200x400/1EBDC2/ffffff&text=Bootstrap+Mega+Menu" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
<!-- <div id="header">
  <div class="logo">
    <a href="#"><img src="img/images.png" style="width:50%;height:10%;"></a>
  </div>  
  <nav>
    <form class="search" action="search.php"> 
      <input name="q" placeholder="Search..." type="search">
    </form>
    <ul>
      <li>
        <a href="">ABOUT</a>
      </li>
      <li>
      </ul>
      <ul>
        <li class="dropdown">
        <a href="">INSECTS</a>
          <ul>
          <li><a href="product-detail1.php">AFTER BITE ITCH ERASER PEN</a></li>
          <li><a href="#">AFTER BITE KIDS</a></li>
          <li><a href="#">AFTER BITE XTRA</a></li>
          <li><a href="#">NATRAPEL PUMP 3.4 OZ</a></li>
          <li><a href="#">BEN’S 100 TICK & INSECT REPELLENT 1.25 OZ</a></li>
          <li><a href="#">MILKY FOOT 3D INTENSE EXFOLIATING PAD</a></li>
          <li><a href="#">PRETTY QUIK NAIL THE HABIT</a></li>
          </ul>        
      </li>
              
            </ul>
        
          </li>
        </ul>        
      </li>
      <li class="dropdown">
        <a href="">MEDICAL KITS</a>
          <ul>
          <li><a href="#">ULTRALIGHT/ WATERTIGHT MEDICAL KIT.9</a></li>
          <li><a href="#">ULTRALIGHT/ WATERTIGHT MEDICAL KIT.9</a></li>
          <li><a href="#">ULTRALIGHT/ WATERTIGHT MEDICAL KIT.5</a></li>
          <li><a href="#">ULTRALIGHT/ WATERTIGHT MEDICAL KIT.5</a></li>
          <li><a href="#">ULTRALIGHT/ WATERTIGHT MEDICAL KIT.3</a></li>
          <li><a href="#">ULTRALIGHT/ WATERTIGHT MEDICAL KIT.3</a></li>
          <li><a href="#">MOUNTAIN GUIDE MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN GUIDE MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN EXPLORER MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN EXPLORER MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN BACKPACKER MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN EXPLORER MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN EXPLORER MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN HIKER MEDICAL KIT</a></li>
          <li><a href="#">MOUNTAIN EXPLORER MEDICAL KIT</a></li>
          </ul>        
      </li>
      <li>
        <a href="">CONTACT</a>
      </li>
      
    </ul>
  </nav>
</div> -->
</body>
    </html>