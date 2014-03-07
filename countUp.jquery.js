(function($) {

    $.fn.countUp = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            counterStartsAt     : 50 ,      // Where the Counter starts counting from
            length              : 3000,     // How long you want the counter to take (in milliseconds) 
            intervalSize        : 1,        // The interval in which the counter moves up by
            delay               : 0,     // delay before the counter starts
            direction           : 'up'      // count up, or count down. DOES NOT WORK YET
        }, options);

        return this.each( function() {
            var intervalSize    =   settings.intervalSize;
            var counterStartsAt =   settings.counterStartsAt;
            var counterEndsAt   =   $(this).text();
            var numOfIntervals  =   (counterEndsAt - counterStartsAt)/intervalSize;
            var length          =   settings.length;
            var speed           =   settings.length/numOfIntervals;
            var e               =   $(this);
            var counter         =   0;
            var delay           =   settings.delay;

            setTimeout( function(){
                initCounter()
            }, delay )

            function initCounter(){ 
                setInterval(function(){
                    if(counter < numOfIntervals){
                        counter = counter + 1 ;
                        counterStartsAt = counterStartsAt + intervalSize;
                        e.show();
                        e.text(counterStartsAt);
                    }
                },speed);
            }; 
        });
    };
}(jQuery));
