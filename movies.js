// Body css attributes
const body = { 'display': 'flex', 'align-items': 'center', 'flex-direction': 'column' }
$('body').css(body)

// Creating a table to add Movie Titles and Rating into
let movieTable = $("<table id='moviesTable'><tr><th>Movie Title</th>  <th>Rating</th> <th></th></tr><table>");
movieTable.appendTo($('div#table'))

// Adding some space between tab
$('th').css('padding-right', '20px');
$('td').css('padding-right', '20px');



$('form').on('submit', function (e) {
    e.preventDefault();
    // Getting the Movie Title and Movie Rating Values
    let movieTitle = $('input').eq(0).val();
    let movieRating = $('input').eq(1).val();

    // Adding the values inside the table 
    $('#moviesTable tr:last').after(`<tr><td align="left">${movieTitle}</td><td align="center">${movieRating} </td><td><button >remove</button></td> </tr>`);

    // Adding table design in here so it adds table row dividers on each row we add
    const tableDesign = { 'border-bottom': '1px solid black', 'border-collapse': 'collapse', 'padding-right': '20px' }
    $('table,td,tr').css(tableDesign)


    // Selected the first two inputs (1)Movie Title (2) Movie rating  to clear after each submit
    $('input').eq(0).val('');
    $('input').eq(1).val('');

    // removing the row containing the remove button 
    $('button').on('click', function () {
        $(this).parent().parent().remove();
    })
})


