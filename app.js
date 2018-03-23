$('.task').each(function(){
    $(this).mouseover(function(){
        $(this).css({'margin-left':'0'})
    })
    $(this).mouseout(function () {
        $(this).css({ 'margin-left': '-5vw' })
    })
})

$('.task').each(function(){
    $(this).click(function(){
        $(this).css({'text-decoration':'line-through'})
    })
})