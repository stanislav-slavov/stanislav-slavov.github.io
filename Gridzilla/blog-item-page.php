<?php
    $page = 'blog-item-page';
    include('templates/header.php');
?>
    <div class ="whole-page-content clearfix centering">
        <h1 class="main-heading">Sticker Mule. Best Place For Your Sticker Needs!</h1> 

        <div class="clearfix">
            <div class="image-container">
                <img src="images/blog_image_1.jpg" alt="Blog image">
                <img src="images/blog_image_2.jpg" alt="Blog image">
            </div>        
            <section class="content-container">
                <div class="data-content clearfix">
                    <div class="data-box">
                        <p>Date</p>
                        <p class="data-value">April 15, 2012</p>
                    </div>
                    <div class="data-box">
                        <p>Tags</p>
                        <p class="data-value">
                            <span>Website</span>
                            <span>Design</span>
                        </p>
                    </div>
                    <div class="data-box">
                        <p>Author</p>
                        <p class="data-value">Michael Reimer</p>
                    </div>
                
                </div>
                <p class="regular-text">Lorem ipsum dolor sit amet, mollis epicuri pri ei, perpetua honestatis ad vix. Ne duo ludus putent, cu causae tamquam voluptua duo. Agam officiis no duo, ut reque decore sea. Cu eripuit accusam vix. Facete blandit detraxit pri cu, sea soluta doming civibus ea.</p>
                <p class="regular-text">Eum eu tale clita iuvaret, cu est saperet forensibus interesset, cum ne case iusto oportere. Id idque indoctum eum, menandri mediocrem has ei. At usu modo quaerendum. Sit ei dicunt tacimates, mea ea enim eirmod suscipiantur, amet dicit ancillae vel in. Ex mea augue eloquentiam, his postea dolorem suavitate ea. Mel hendrerit accommodare concludaturque ex.</p>

                <a class="decorated-link double-arrow" href="//www.stickermule.com/" target="_blank">Visit Website</a>
            </section>
        </div>

        <h1 class="main-heading">Similar Posts. Check Them Out!</h1>  

        <div class="similar-posts-container clearfix">
            <div class="similar-post-item"><a href="#">
                    <img src="images/similar_post_1.jpg" alt="Similar post">
                    <div>
                        <p>Character Design</p>
                        <p class="bottom-info">June 15, 2012</p>
                    </div>
                </a></div>
            <div class="similar-post-item"><a href="#">
                    <img src="images/similar_post_2.jpg" alt="Similar post">
                    <div>
                        <p>Top iPhone Apps</p>
                        <p class="bottom-info">June 15, 2012</p>
                    </div>
                </a></div>
            <div class="similar-post-item"><a href="#">
                    <img src="images/similar_post_3.jpg" alt="Similar post">
                    <div>
                        <p>Social Media Buttons</p>
                        <p class="bottom-info">June 15, 2012</p>
                    </div>
                </a></div>
            <div class="similar-post-item"><a href="#">
                    <img src="images/similar_post_4.jpg" alt="Similar post">
                    <div>
                        <p>10 Amazing Websites</p>
                        <p class="bottom-info">June 15, 2012</p>
                    </div>
                </a></div>
        </div>
    </div>

<?php include('templates/footer.php') ?>
