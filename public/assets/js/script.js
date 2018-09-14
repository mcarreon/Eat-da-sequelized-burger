$(document).ready(function() {
    
    $("#burger-btn").on("click", function (e) {
        //console.log('test');
        e.preventDefault();

        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        }

        if (burger_name != '') {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            })
            .then(function() {
                location.reload();
            });
        }

        
    });

    $(".eat-btn").on("click", function (e) {
        e.preventDefault();

        var id = $(this).data("id");
        console.log("Updating burger with id: " + id);
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: true
        })
        .then(function() {
            location.reload();
        });
    })

});