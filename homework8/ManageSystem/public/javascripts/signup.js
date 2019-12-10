// 其实可以写成一个函数简便一点
$(function(){
    $("input").attr("success", false);
    $("input").eq(0).on("change", function (event) {
        if(/^[a-zA-Z]\w{5,17}$/.test($(this).val())){
            $.ajax({
                url:"/query",
                async:true,
                data:{username:$(this).val()},
                success:function(data){
                    if(data == "Repeated"){
                        $("input").eq(0).removeClass("validinput").addClass("invalidinput");
                        $("span").eq(0).text("用户名重复");
                        $("input").eq(0).attr("success", false);
                    }
                    else{
                        $("input").eq(0).removeClass("invalidinput").addClass("validinput");
                        $("span").eq(0).text("");
                        $("input").eq(0).attr("success", true);
                    }
                }
            });
            
        }else{
            $(this).removeClass("validinput").addClass("invalidinput");
            if(!/^[a-zA-Z]/.test($(this).val())) $("span").eq(0).text("必须以英文字母开头");
            else $("span").eq(0).text("用户名6~18位英文字母、数字或下划线");
            $("input").eq(0).attr("success", false);
        }
    });
    $("input").eq(1).on("change", function (event) {
        if(/^[1-9]\d{7}$/.test($(this).val())){
            $.ajax({
                url:"/query",
                async:true,
                data:{studentID:$(this).val()},
                success:function(data){
                    if(data == "Repeated"){
                        $("input").eq(1).removeClass("validinput").addClass("invalidinput");
                        $("span").eq(1).text("学号重复");
                        $("input").eq(1).attr("success", false);
                    }
                    else{
                        $("input").eq(1).removeClass("invalidinput").addClass("validinput");
                        $("span").eq(1).text("");
                        $("input").eq(1).attr("success", true);
                    }
                }
            });
        }
        else{
            $(this).removeClass("validinput").addClass("invalidinput");
            if(/^0/.test($(this).val())) $("span").eq(1).text("不能以0开头");
            else $("span").eq(1).text("学号8位数字");
            $("input").eq(1).attr("success", false);
        }
    });
    $("input").eq(2).on("change", function (event) {
        if(/^[1-9]\d{10}$/.test($(this).val())){
            $.ajax({
                url:"/query",
                async:true,
                data:{phonenumber:$(this).val()},
                success:function(data){
                    if(data == "Repeated"){
                        $("input").eq(2).removeClass("validinput").addClass("invalidinput");
                        $("span").eq(2).text("电话号码重复");
                        $("input").eq(2).attr("success", false);
                    }
                    else{
                        $("input").eq(2).removeClass("invalidinput").addClass("validinput");
                        $("span").eq(2).text("");
                        $("input").eq(2).attr("success", true);
                    }
                }
            });
        }
        else{
            $(this).removeClass("validinput").addClass("invalidinput");
            if(/^0/.test($(this).val())) $("span").eq(2).text("不能以0开头");
            else $("span").eq(2).text("电话11位数字");
            $("input").eq(2).attr("success", false);
        }
    });
    $("input").eq(3).on("change", function (event) {
        if(/^\w+@\w+\.\w+(\.\w+)*$/.test($(this).val())){
            $.ajax({
                url:"/query",
                async:true,
                data:{email:$(this).val()},
                success:function(data){
                    if(data == "Repeated"){
                        $("input").eq(3).removeClass("validinput").addClass("invalidinput");
                        $("span").eq(3).text("Email重复");
                        $("input").eq(3).attr("success", false);
                    }
                    else{
                        $("input").eq(3).removeClass("invalidinput").addClass("validinput");
                        $("span").eq(3).text("");
                        $("input").eq(3).attr("success", true);
                    }
                }
            });
        }
        else{
            $(this).removeClass("validinput").addClass("invalidinput");
            $("input").eq(3).attr("success", false);
            $("span").eq(3).text("RegEx:/^\\w+@\\w+\\.\\w+(\\.\\w+)*$/");
        }
    });
    $("input[type=submit]").on("click", function(){
        var valid = true;
        $("input[type=text]").each(function(index, elem){
            if($(elem).attr("success") == "false"){
                valid = false;
                return;
            }
        });
        if(valid) $("form").submit();
        else return false;

    })

});