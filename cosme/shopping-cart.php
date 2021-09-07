<?php include 'header.php' ?>


        <main class="site-main">
            <div class="page-title page-title--white  bg-3">
                <div class="container">
                    <div class="page-title__main">
                        <h1 class="text-uppercase mb-5">Shopping Cart</h1>

                        <ol class="breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>


                            <li class="active">Shopping Cart</li>


                        </ol>
                    </div>
                    <!-- page-title__main -->
                </div>
            </div>
            <!-- page-title -->


            <section class="section table-cart">
                <div class="container">
                    <div class="table-responsive">
                        <table class="table table-hover table_cart">
                            <tbody>
                                <tr>
                                    <td>
                                        <a class="cart-image" href="#"><img src="img-demo/products/cart-1.jpg" alt=""></a>
                                    </td>
                                    <td>
                                        <a href="#" class="fz-16">Stretch toothpick jean in ecru</a>
                                        <h6>Blue / Green</h6>
                                    </td>
                                    <td><span class="br-product__price">$126.00</span></td>
                                    <td>
                                        <label class="sr-only">Select a value:</label>
                                        <input type="number" class="spinner" name="value" value="01">
                                    </td>
                                    <td><span class="br-product__price">$126.00</span></td>
                                    <td><a class="red close" href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                                </tr>

                                <tr>
                                    <td>
                                        <a class="cart-image" href="#"><img src="img-demo/products/cart-2.jpg" alt=""></a>
                                    </td>
                                    <td>
                                        <a href="#" class="fz-16">Women New Balance for J.Crew 696</a>
                                        <h6>Blue / Green</h6>
                                    </td>
                                    <td><span class="br-product__price">$68.00</span></td>
                                    <td>
                                        <label class="sr-only">Select a value:</label>
                                        <input type="number" class="spinner" name="value" value="02">
                                    </td>
                                    <td><span class="br-product__price">$136.00</span></td>
                                    <td><a class="red close" href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                                </tr>

                                <tr>
                                    <td>
                                        <a class="cart-image" href="#"><img src="img-demo/products/cart-3.jpg" alt=""></a>
                                    </td>
                                    <td>
                                        <a href="#" class="fz-16">Women New Balance for J.Crew 696</a>
                                        <h6>Blue / Green</h6>
                                    </td>
                                    <td><span class="br-product__price">$42.00</span></td>
                                    <td>
                                        <label class="sr-only">Select a value:</label>
                                        <input type="number" class="spinner" name="value" value="06">
                                    </td>
                                    <td><span class="br-product__price">$252.00</span></td>
                                    <td><a class="red close" href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="text-center">
                        <h5 class="text-uppercase">cart totals</h5>
                        <h2 class="total-price mb-25">$ 514.00</h2>
                        <a href="#" class="btn btn-lg btn-outline btn-default">continue shopping</a>
                        <a href="#" class="btn btn-lg btn-default">process to checkout</a>
                    </div>
                </div>
            </section>
        </main>

        <?php include 'footer.php' ?>
    <?php include 'script.php' ?>
        
