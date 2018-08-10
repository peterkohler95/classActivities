$(document).ready(function () {
    $("#searchButtonId").on("click", function () {
        event.preventDefault();


        // gather the data from the fields
        var searchTerm = $("#search-term").val().trim();
        var numRecords = $("#articleCount").val().trim();
        var startYear = $("startYear").val().trim();
        var endYear = $("endYear").val().trim();

        var url =

            $.ajax({
                url: url,
                method: "GET",
            }).done(function (result) {
                console.log(result);
            }).fail(function (err) {
                throw err;
            })
    })
})

