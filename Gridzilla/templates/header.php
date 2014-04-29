<?php include 'inc/env.php'; ?>
<!DOCTYPE html>

<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js eq-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <base href="<?php echo $basehref; ?>">
    <title>Gridzilla Website</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
    <link rel="stylesheet" href="styles/general.css">
    <link rel="stylesheet" href="styles/index.css">
    <link rel="stylesheet" href="styles/about-page.css">
    <link rel="stylesheet" href="styles/contact-page.css">
    <link rel="stylesheet" href="styles/blog-item-page.css">
    <link rel="stylesheet" type="text/css" href="styles/blog-page.css">

</head>

<body>

    <div class="wrapper" role="main">
        <header class="main-header centering">
            <div class="upper-header clearfix">
                <div class="main-logo">
                    <a href="index.php"><h1>Gridzilla</h1></a>
                </div>
                <form action="//google.com" method="POST" id="search-form">
                    <input type="text" id="search" class="input" placeholder="Enter your search ...">
                    <button type="submit" class="search-button"></button>
                </form>
            </div>
            <nav class="main-navigation">
                <a href="index.php">Home</a>
                <a href="about-page.php">About</a>
                <a href="blog-page.php">Blog</a>
                <a href="contact-page.php">Contact</a>
            </nav>

        </header>