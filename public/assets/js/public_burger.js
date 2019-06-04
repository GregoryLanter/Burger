$(document).ready(function (){
    $(function () {
        $(".create-form").on("submit", function (event) {
            debugger;
            console.log("Here 1 PB");
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            var newBurger = {
                burger_name: $("#bn").val().trim(),
                devoured: false
            };
            console.log(newBurger);
            // Send the POST request.
            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
        $(".burger_form").on("click", function (event) {
            console.log($(this).context.innerText);
            let textString = $(this).context.innerText;
            id = textString.slice(0, textString.indexOf("."))

            var burger = {
                burger_name: textString.slice(textString.indexOf(".")+2,textString.indexOf("Devour")-1),
                devoured: true
            };
            // Send the DELETE request.
            $.ajax("/api/burger/" + id, {
                type: "PUT",
                data: burger
            }).then(
                function () {
                    console.log("deleted cat", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

    });

});