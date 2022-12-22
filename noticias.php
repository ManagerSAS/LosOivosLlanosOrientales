<?php
    error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" media="screen">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" media="screen">
    <link rel="icon" type="image/png" href="images/logo/favicon.png" sizes="32x32 16x16">
    <link rel="stylesheet" href="css/index.css" media="screen">
        
    <title>Los Olivos Villavicencio</title>
</head>
<body>
        <main id="content" role="main">
            <div id="app">
                <menu-nav></menu-nav>
                <?php
                    function feed($feedURL){
                        $i = 0; 
                        $url = $feedURL;
                        $rss = simplexml_load_file($url);
                                                
                        echo '<section class="pt-md-13">
                                <div class="container">
                                    <div class="row">
                                    ';
                            foreach($rss->channel->item as $item) { 
                                $link = $item->link;  //extrae el link
                                $title = $item->title;  //extrae el titulo
                                $date = $item->pubDate;  //extrae la fecha
                                $guid = $item->description;  //extrae el link de la imagen
                                $description = strip_tags($item->description);  //extrae la descripcion
                                    if (strlen($description) > 400) { //limita la descripcion a 400 caracteres
                                        $stringCut = substr($description, 0, 200);
                                        $description = substr($stringCut, 0, strrpos($stringCut, ' ')).'...';
                                    }
                                    if ($i < 8) { // extrae solo 16 items
                                        echo    '<article class="col-md-4 mb-3" style="height: fit-content;">
                                                        <div class="container-card-notice">
                                                            <h5 class="text-left">
                                                                <a class="text-comfortaa text-green-light" href="'.$link.'" target="_blank">'.$title.'</a>
                                                            </h5>                                                                
                                                            <div id="container-noticia" class="text-raleway text-muted text-left">
                                                                '.$guid.'
                                                            </div>
                                                            <div class="text-raleway mt-2 text-right">
                                                                <a class="btn btn-outline-green ml-auto" href="'.$link.'" target="_blank"> Ver mas </a>
                                                            </div>
                                                        </div>
                                                </article>
                                                ';
                                    }
                                    $i++;
                                }
                        echo ' 
                                    </div>  
                                </div>                              
                            </section>
                                ';
                    }
                ?>	
                <?php feed("https://losolivosvillavicencio.blogspot.com/rss.xml") ?>
                <!-- =========== FOOTER =========== -->
                <footer-olivos></footer-olivos>
            </div>
        </main>
            
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous" defer></script>
    <script src="components/vue.min.js" defer></script>
    <script src="components/footer.js" defer></script>
    <script src="components/header.js" defer></script>
    <script src="components/init.js" defer></script>
    <script>
        $('#container-noticia p').css('display','none');
        $('#container-noticia div').css('display','none');
        $('#container-noticia img').addClass('img-noticia');
    </script>
 </body>
</html>