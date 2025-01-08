$(document).ready(function(){
    $('header').click(function(){
        $('form').slideDown();
    })

    $('#cancel-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const inputActivity = $('#activity').val();
        const newItem = $(`<li>${inputActivity}</li>`);
        $(newItem).appendTo('ul')
        $('#activity').val('')

        
        $('li').click(function(){
            newItem.css('text-decoration', 'line-through')
        })
    })
})