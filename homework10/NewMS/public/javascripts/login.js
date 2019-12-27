$(function(){
    $("input[type=submit]").on("click", function(){
        $("input[name=password]").val(hex_md5( $("input[name=password]").val()));
    })

});