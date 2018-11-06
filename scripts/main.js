$(document).ready(

    function(){
      $(".btn").click(function(){
        var add = $("input[name=listItem]").val();
        var max = 10;
        $("ol").append("<li>" + add + "</li>");
        $("input[type=text").each(function(){
          $(this).val();
        });    
        $("ol").children("li").slice(max).hide();
        $(".btn").click(function(){
          $(this).val();
        });
        $(".btn").keydown(function(){
          if (e.which == 13){
            $("btn").click();
          }
        });

      });
      
      $(document).on("click","li", function(){
        $(this).toggleClass("strike").fadeOut("slow");    
      });

    }
);