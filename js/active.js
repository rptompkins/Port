randomColor = function () {
                    return "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",1)";
                };

            $(document).ready(function () {
                
                //for each div, let's get the URL and give each div the audio functions
                $('#sp span').each(function () {
                    addAudioProperties(this);
                });

                //on click, check to see if we have a grey box or a colored box
                //play or stop accordingly
                $('#sp span').click(function () {
                    // console.log($(this).css('background-color'));
                    if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)')
                    {
                        $(this).css('background-color', 'rgba(0, 0, 1, 0)');
                        this.addToLoops();
                    }else{
                        this.stop();
                        this.removeLoop();
                        $(this).css('background-color','rgba(0, 0, 0, 0)');
                        $(this).css('opacity',1);
                    }
                });
            });

            $(window).load(function(){
            $('a.btn').click(function(){
                $( this ).toggleClass( "active" );
            });
            });