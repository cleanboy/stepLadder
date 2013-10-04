/**
 * StepLadder - a menu animation plugin
 * Must be called on a nested ul > li > ul > li
 *
 * Usage: $('ul').stepLadder();
 *
 * @author Matthew Jonat <matthew.jonat@gmail.com>
 * @author Adam Cox <adamdama@hotmail.com>
 * 
 * EDIT: Added delay and fade time variables to be inserted with call.
 * 
**/

$.fn.stepLadder = function(origDelay, fadeInTime){
	$(this).children('li').each(function(){
        var $this = $(this),
            $ul = $this.children('ul'),
            $lis = $ul.children('li');
            //origDelay = 50,
            //fadeInTime = 100
        
        $this.hover(function(){
            var delay = origDelay;                
            $ul.fadeIn(fadeInTime);
            $lis.each(function(){
                $(this).stop(true, true).hide().delay(delay).fadeIn(fadeInTime);
                delay += origDelay;
            });
        }, function(){
            var delay = origDelay;                
            $ul.show();
            $($lis.get().reverse()).each(function(){
                console.log(delay);
                $(this).stop(true, true).show().delay(delay).fadeOut(fadeInTime);
                delay += origDelay;
            });
        });
    });
};
