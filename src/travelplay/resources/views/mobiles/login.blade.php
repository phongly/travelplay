@extends("layouts.template.sub")
@section('content')
<div id="center_column" class="center_column">

    <div class="breadcrumb bordercolor">
        <div class="breadcrumb_inner">
            <a href="/" title="return to Home">Home</a><span class="navigation-pipe">&gt;</span><span class="navigation_page">Login</span></div>
    </div>

    <script type="text/javascript">
        // <![CDATA[
        idSelectedCountry = false;
        countries = new Array();
        countriesNeedIDNumber = new Array();
        countriesNeedZipCode = new Array();
        $(function(){
            $('.id_state option[value=]').attr('selected', true);
        });
        //]]>
    </script>
    <h1>Log in</h1>
    <script type="text/javascript">

        $(document).ready(function(){
            $('#create-account_form').submit(function(){
                submitFunction();
                return false;
            });
            $('#SubmitCreate').click(function(){
                submitFunction();
            });
        });
        function submitFunction()
        {
            $('#create_account_error').html('').hide();
            //send the ajax request to the server
            $.ajax({
                type: 'POST',
                url: baseUri,
                async: true,
                cache: false,
                dataType : "json",
                data: {
                    controller: 'authentication',
                    SubmitCreate: 1,
                    ajax: true,
                    email_create: $('#email_create').val(),
                    token: token
                },
                success: function(jsonData)
                {
                    if (jsonData.hasError)
                    {
                        var errors = '';
                        for(error in jsonData.errors)
                            //IE6 bug fix
                            if(error != 'indexOf')
                                errors += '<li>'+jsonData.errors[error]+'</li>';
                        $('#create_account_error').html('<ol>'+errors+'</ol>').show();
                    }
                    else
                    {
                        // adding a div to display a transition
                        $('#center_column').html('<div id="noSlide">'+$('#center_column').html()+'</div>');
                        $('#noSlide').fadeOut('slow', function(){
                            $('#noSlide').html(jsonData.page);
                            // update the state (when this file is called from AJAX you still need to update the state)
                            bindStateInputAndUpdate();
                        });
                        $('#noSlide').fadeIn('slow');
                        document.location = '#account-creation';
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    alert("TECHNICAL ERROR: unable to load form.\n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);
                }
            });
        }

    </script>

    <form action="" method="post" id="create-account_form" class="std">
        <fieldset>
            <h3>Create your account</h3>
            <div class="form_content clearfix">
                <h4>Enter your e-mail address to create an account.</h4>
                <div class="error" id="create_account_error" style="display:none"></div>
                <p class="text">
                    <label for="email_create">E-mail address</label>
                    <span><input type="text" id="email_create" name="email_create" value="" class="account_input"/></span>
                </p>
                <p class="submit">
                    <input type="hidden" class="hidden" name="back" value="my-account"/> <input type="button" id="SubmitCreate" name="SubmitCreate" class="button_large" value="Create your account"/>
                    <input type="hidden" class="hidden" name="SubmitCreate" value="Create your account"/>
                </p>
            </div>
        </fieldset>
    </form>
    <form action="api/authenticate" method="post" id="login_form" class="std">
        <fieldset>
            <h3>Already registered?</h3>
            <div class="form_content clearfix">
                <p class="text">
                    <label for="email">E-mail address</label>
                    <span><input type="text" id="email" name="email" value="" class="account_input"/></span>
                </p>
                <p class="text">
                    <label for="passwd">Password</label>
                    <span><input type="password" id="passwd" name="password" value="" class="account_input"/></span>
                </p>
                <p class="lost_password"><a href="http://livedemo00.template-help.com/prestashop_41480/index.php?controller=password">Forgot your password?</a></p>
                <p class="submit">
                    <input type="hidden" class="hidden" name="back" value="my-account"/> <input type="submit" id="SubmitLogin" name="SubmitLogin" class="button" value="Log in"/>
                </p>
            </div>
        </fieldset>
    </form>
</div>
@stop