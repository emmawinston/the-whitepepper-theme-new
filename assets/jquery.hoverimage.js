$('body').find('*[hoverImg]').each(function(index){
    $this = $(this)
    $this.wrap('<div>')     
 
    $this.parent().css('background-image',"url(" + $this.attr('hoverImg')+")")
        $this.hover(function() {
            $(this).stop()
            $(this).fadeTo('',.01)    
        },function() {
            $(this).stop()
            $(this).fadeTo('',1)             
        })                    
})