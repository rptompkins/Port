$(window).ready(function(){
  var audio_preload = 0;
  function launchApp(launch){
    audio_preload++;
    if ( audio_preload == 17 || launch == 1) {  // set 3 to # of your files
      $('#loader').fadeOut('slow');  // set this function to your start function
    }
  }
  var support = {};
  function audioSupport() {
    var a = document.createElement('audio');
    var mp3 = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
    if (mp3) return 'mp3';
    else return 0;
  }
  support.audio = audioSupport();
  function loadAudio(url, vol){
    var audio = new Audio();
    audio.src = url;
    audio.preload = "auto";
    audio.volume = vol;
    $(audio).on("loadeddata", launchApp);  // jQuery checking
    return audio;
  }
        if (support.audio === 'mp3') { 
    var snd1 = loadAudio("sounds/Bassline2.mp3", 1);
    var snd2 = loadAudio("sounds/VFX2Bass1128BPMcopy.mp3", 0.3);
    var snd3 = loadAudio("sounds/VEH2SpecialSounds-28copy.mp3", 0.05);
    var snd1 = loadAudio("sounds/VFX2Bass3128BPMcopy.mp3", 1);
    var snd2 = loadAudio("sounds/VEH2SpecialSounds-13copy.mp3", 0.3);
    var snd3 = loadAudio("sounds/VEH2SpecialSounds-36copy.mp3", 0.05);
    var snd1 = loadAudio("sounds/VEC2SpecialSounds01.mp3", 1);
    var snd2 = loadAudio("sounds/VEH2SpecialSounds-02copy.mp3", 0.3);
    var snd3 = loadAudio("sounds/VFX2Loop006128BPMcopy.mp3", 0.05);
    var snd1 = loadAudio("sounds/VEC2Crowds24.mp3", 1);
    var snd2 = loadAudio("sounds/VEEElectroLoop007.mp3", 0.3);
    var snd3 = loadAudio("sounds/VEH1ShakerLoop-02copy.mp3", 0.05);
    var snd1 = loadAudio("sounds/VEC3SpecialSounds002RootE132BPM.mp3", 1);
    var snd2 = loadAudio("sounds/VEEElectroLoop001.mp3", 0.3);
    var snd3 = loadAudio("sounds/VFX2Beat128BPMcopy.mp3", 0.05);
    var snd1 = loadAudio("sounds/percloop.mp3", 1);
    var snd2 = loadAudio("sounds/VEEElectroLoop024copy.mp3", 0.3);
        // add more sounds here
  } else {
    launchApp(1);  // launch app without audio
  }


});

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