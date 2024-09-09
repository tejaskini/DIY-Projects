m=0;
var B;
function start()
{
//     var audio = document.createElement('audio');
//     audio.setAttribute('src','sound.mp3')
// // audio.setAttribute('autoplay','sound.mp3.wav');
// audio.loop = true;
// audio.play;
     B = setInterval(run,150);

    function run(){
        if(m==1000){
            clearInterval(B);
            m=0;
        }
        else{
            m +=10;
            var C= document.getElementById("img");
            C.style.marginLeft = m + 'px';
        }
    }
}
function stop(){
   clearInterval(B) 

}


