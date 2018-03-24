// function tom cancel out task  

$('p').each(function(){
    $(this).click(function(){
        $(this).css({'text-decoration':'line-through'})
    })
})

//function to remove tak

$('.tasks').on('click','.btn', function (e) {
    $(this).parent().fadeOut(function () {
        $(this).remove()})
})


//placeholder removal function

$('.input input').focus(function(){
    $(this).attr('placeholder','').focusout(function(){
        $(this).attr('placeholder', 'Add New Note')
    })
})

//new task adding function

$('#inp').keypress(function(e){
    var keyCode = (e.keyCode?e.keyCode:e.which);
    if (keyCode == 13){
        var data = `<div class="task">
                <div class="btn">
                    <i class="fas fa-trash"></i>
                </div>
                <p>${$('#inp').val()}</p>`
        $('.tasks').append(data)
        $('#inp').val('')
    }
})


//show hide input box

$('.addbutton').click(function(){
    $('.input input').toggleClass('inactive')
    $('.input input').parent().toggleClass('inactive')
})