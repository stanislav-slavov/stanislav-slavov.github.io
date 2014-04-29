<?php
    $page = 'contact-page';
    include('templates/header.php');
?>
    <div class ="centering">

    <h1 class="main-heading">Contact Us. Locate Us. Send Us Your Thoughts!</h1>

    <section class = "contact-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
        Praesent mauris. Maecenas in magna mollis lectus lacinia mollis. </section>

    <iframe 
        width="940" 
        height="400" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://www.google.bg/maps?f=q&amp;source=s_q&amp;hl=bg&amp;geocode=&amp;q=Saskatoon,+SK,+Canada&amp;aq=0&amp;oq=Saskatoon&amp;sll=42.638893,23.323947&amp;sspn=0.295495,0.676346&amp;ie=UTF8&amp;hq=&amp;hnear=%D0%A1%D0%B0%D1%81%D0%BA%D0%B0%D1%82%D1%83%D0%BD,+Division+No.+11,+%D0%A1%D0%B0%D1%81%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D0%B0%D0%BD,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0&amp;ll=52.13437,-106.647656&amp;spn=0.123266,0.338173&amp;t=m&amp;z=12&amp;iwloc=A&amp;output=embed">
    </iframe>

    <form>
    <input type="text" name="firstname" placeholder="first name" class="field"><br>
	<input type="text" name="lastname" placeholder="last name" class="field"><br>
	<input type="text" name="mail" placeholder="e-mail address" class="field"><br>
	<input type="text" name="message" placeholder="message" class="text"><br>
	<input type="submit" value =">>" class="submit">Submit

    </div>

<?php include('templates/footer.php') ?>
