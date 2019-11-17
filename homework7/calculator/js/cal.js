$(function () {
    
    $("button").each(function (index, elem) {
        $(elem).on("click", function (e) {
            if ($(this).text() == "←") {
                if ($("#output").attr('value').length == 1) $("#output").attr("value", "");
                else {
                    $("#output").attr("value", $("#output").attr("value").substring(0, $("#output").attr("value").length-1));
                }
            }
            else if($(elem).text() == "CE"){
                $("#output").attr("value", "");
            }
            else if ($(this).text() == "="){
                try {
                    if ($("#output").attr("value") == ""){ $("#output").attr("value", "（づ￣3￣）づ╭❤～") ; return;}
                    var result = eval($("#output").attr("value"));
                    $("#output").attr("value", parseFloat(result));
                } catch (error) {
                    alert("Wrong Expression");
                }
            }
            else{
                $("#output").attr("value", $("#output").attr("value") + $(this).text());
            }
        });
    });
});