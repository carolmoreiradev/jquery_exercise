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
        const newItem = $('<li></li>');
        $(`<li>${inputActivity}</li>`).appendTo(newItem);
        $(newItem).appendTo('ul');
        $('#activity').val('');
        
        $(newItem).on('click', function(){
            $(this).toggleClass('riscado');
        })
    })
})