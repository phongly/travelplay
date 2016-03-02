@extends("layouts.template.sub")
@section('slide')
    {!! Html::script('js/nivo.slider-1.js') !!}
    <div id="tmnivoslider">
        <div id="slider">
            <a href="javascript:if(confirm(%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=12  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=12%27" tppabs="http://livedemo00.template-help.com/prestashop_41480/product.php?id_product=12">
                <img src="{{ asset('images/slide_00-1.jpg') }}" alt="" title="#htmlcaption1"/></a>
            <a href="javascript:if(confirm(%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=category&id_category=5  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=category&id_category=5%27" tppabs="http://livedemo00.template-help.com/prestashop_41480/category.php?id_category=5">
                <img src="{{ asset('images/slide_01-1.jpg') }}"  alt="" title="#htmlcaption2"/></a>
            <a href="javascript:if(confirm(%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=7  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=7%27" tppabs="http://livedemo00.template-help.com/prestashop_41480/product.php?id_product=7">
                <img src="{{ asset('images/slide_02-1.jpg') }}" alt="" title="#htmlcaption3"/></a>
        </div>
        <div id="htmlcaption1" class="nivo-html-caption">
            <h2>nokia</h2>
            <h3>Lumia 610</h3>
            <h4>Vitae diam doloret ut purus luctus facilisis. Nullam at lectus non eros tristique ultrice. Duis quis imperdiet est. Sed lobortis ultrices aliquet.</h4>
            <a class="slide_btn" href="javascript:if(confirm(%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=12  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=12%27" tppabs="http://livedemo00.template-help.com/prestashop_41480/product.php?id_product=12">shop now</a>
        </div>
        <div id="htmlcaption2" class="nivo-html-caption">
            <h2>Samsung</h2>
            <h3>galaxy note</h3>
            <h4>Vitae diam doloret ut purus luctus facilisis. Nullam at lectus non eros tristique ultrice. Duis quis imperdiet est. Sed lobortis ultrices aliquet.</h4>
            <a class="slide_btn" href="javascript:if(confirm(%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=category&id_category=5  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=category&id_category=5%27" tppabs="http://livedemo00.template-help.com/prestashop_41480/category.php?id_category=5">shop now</a>
        </div>
        <div id="htmlcaption3" class="nivo-html-caption">
            <h2>HTC</h2>
            <h3>DESire S</h3>
            <h4>Vitae diam doloret ut purus luctus facilisis. Nullam at lectus non eros tristique ultrice. Duis quis imperdiet est. Sed lobortis ultrices aliquet.</h4>
            <a class="slide_btn" href="javascript:if(confirm(%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=7  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://livedemo00.template-help.com/prestashop_41480/index.php?controller=product&id_product=7%27" tppabs="http://livedemo00.template-help.com/prestashop_41480/product.php?id_product=7">shop now</a>
        </div>
    </div>
    <script type="text/javascript">

        $(window).load(function() {
            $('#slider').nivoSlider({
                effect:'fade', //Specify sets like: 'fold,fade,sliceDown'
                slices:10,
                animSpeed:500, //Slide transition speed
                pauseTime:5000,
                startSlide:0, //Set starting Slide (0 index)
                directionNav:false, //Next & Prev
                directionNavHide:false, //Only show on hover
                controlNav:true, //1,2,3...
                controlNavThumbs:true, //Use thumbnails for Control Nav
                controlNavThumbsFromRel:false, //Use image rel for thumbs
                controlNavThumbsSearch: '.jpg', //Replace this with...
                controlNavThumbsReplace: '_thumb-1.jpg'/*tpa=http://livedemo00.template-help.com/prestashop_41480/_thumb.jpg*/, //...this in thumb Image src
                keyboardNav:true, //Use left & right arrows
                pauseOnHover:true, //Stop animation while hovering
                manualAdvance:false, //Force manual transitions
                captionOpacity:1.0, //Universal caption opacity
                beforeChange: function(){},
                afterChange: function(){},
                slideshowEnd: function(){} //Triggers after all slides have been shown
            });
        });

    </script>
@stop
@section('content')
    <div id="center_column" class="center_column">
        <div ui-view></div>
    </div>
@stop