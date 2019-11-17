//less than 40lines
$(function () {
    $('table thead th').each(function (index, element) {
        $(element).on("click", function (event) {
            var flag = $(element).attr('order'); // asc
            if (!flag || flag == 2) $(element).attr('order', 1); //asc
            if (flag == 1) $(element).attr('order', 2); //dec 
            var table = $(this).closest("table");
            var thead = table.find('thead');
            thead.find("th").not(element).css({ background: "none", "background-color": "blue" }).attr("order", "");
            var rows = table.find('tbody tr');
            rows.sort(function (a, b) {
                var aa = $(a).find('td').eq(thead.find(element).index()).text();
                var bb = $(b).find('td').eq(thead.find(element).index()).text();
                if (flag == 1)
                    return (aa < bb) ? 1 : -1;
                else return (aa > bb) ? 1 : -1;
            });
            rows.each(function(index, element){
                if (index % 2 == 1) $(element).css({background:"#DDDDDD"});
                else $(element).css({background:"white"});
            });
            rows.detach().appendTo(table.find("tbody"));
            if (!flag || flag == 2)
                $(element).css({
                    "background": "url('img/ascend.png') no-repeat right",
                    "background-color": "rgba(0,0,255,0.5)"
                });
            else
                $(element).css({
                    "background": "url('img/descend.png') no-repeat right",
                    "background-color": "rgba(0,0,255,0.5)"
                });
        });

    });

});