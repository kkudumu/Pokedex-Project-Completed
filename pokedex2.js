$(document).ready(function() {
            for (var i = 1; i <= 151; i++) {
                $('#pokemon').append("<img id='" + i + "' src='http://pokeapi.co/media/img/" + i + ".png'/>");

            }
            $(document).on("click", "img", function() {
                var id = this.id;
                $.get('http://pokeapi.co/api/v1/pokemon/' + id, function(res) {
                    $('#image').empty().append("<img id='" + id + "' src='http://pokeapi.co/media/img/" + id + ".png'/>" + "<h4>" + "Types:" + "</h4>");
                    $('#name').empty().append("<h2>" + res['name'] + "</h2>");
                    var typecast = "";
                    for (var i = 0; i < res['types'].length; i++) {
                        typecast += "<li>" + res['types'][i]['name'] + "</li>";
                    }

                    $('#types').html(typecast);
                    // $('#types').empty().append("<li>" + res.types[0].name + "</li>" + "<li>" + res.types[1].name + "</li>");

                    $('#height').empty().append("<h4>" + "Height:" + "</h4>" + res['height']);
                    $('#weight').empty().append("<h4>" + "Weight:" + "</h4>" + res['weight']);

                })

            })
        });