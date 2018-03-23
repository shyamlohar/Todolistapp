$('.task').each(function(){
    $(this).mouseover(function(){
        $(this).css({'margin-left':'0'})
    })
    $(this).mouseout(function () {
        $(this).css({ 'margin-left': '-5vw' })
    })
})

$('p').each(function(){
    $(this).click(function(){
        $(this).css({'text-decoration':'line-through'})
    })
})

$('.btn').each(function(){
    $(this).click(function(){
        $(this).parent().fadeOut(function(){
            $(this).remove()
            console.log(this)
        })
    })
})