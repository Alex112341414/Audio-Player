let data = {
    title:[ 
        "MiyaGi - Самурай ",
        "MiyaGi & Andy Panda - Minor",
        "MiyaGi & Andy Panda - Там Ревели Горы",
        "MiyaGi & Эндшпиль - Fire Man",
        "Miyagi & Эндшпиль feat. Рем Дигга - I Got Love"
    ],
    song:[
        "Music/MiyaGi - Самурай.mp3",
        "Music/MiyaGi & Andy Panda - Minor.mp3",
        "Music/MiyaGi & Andy Panda - Там Ревели Горы.mp3",
        "Music/MiyaGi & Эндшпиль - Fire Man.mp3",
        "Music/Miyagi & Эндшпиль feat. Рем Дигга - I Got Love.mp3"
    ],
    poster:[
        "https://i.pinimg.com/originals/3c/95/b7/3c95b76d0d7bd7f2379e6a7ac11d0983.jpg",
        "https://i.ytimg.com/vi/4EfM6rPmxow/maxresdefault.jpg",
        "https://images.genius.com/cf2f320a368e711c369764f0b62bf772.1000x1000x1.png",
        "https://www.cevirce.com/lyrics/wp-content/uploads/2021/11/miyagi-%D1%8D%D0%BD%D0%B4%D1%88%D0%BF%D0%B8%D0%BB%D1%8C-fire-man-russisch-songtext-deutsch-uebersetzung-1.jpg",
        "https://cdn1.tenchat.ru/static/vbc-gostinder/2022-05-26/181f4ade-5b2d-4099-84e5-02d289cf6841.jpeg"],

}

let song = new Audio()


let currentSong = 0;

window.onload = function(){
    playSong()
}



function playSong(){
    song.src = data.song[currentSong]
    let  songTitle = document.getElementsByClassName("songtitle")
    songTitle[0].textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play()
}

function playerPauseSong(){
    let play = document.getElementById("play")

    if(song.paused){
        song.play()
        play.src =  "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate",function(){
    //  console.log(song.currentTime)
    //  console.log(song.duration)

 let fill = document.getElementsByClassName("fill")

 let position = song.currentTime / song.duration

 fill[0].style.marginLeft = position * 100 + "100%"
 convertTime(song.currentTime)
 
 if(song.ended){
     next()

 }
})
let currentTime = document.getElementsByClassName("currentTime")

function convertTime(seconds){
 

 let min  = Math.floor(seconds/60)
 let sec = Math.floor(seconds%60)

 min = (min < 10 ) ? "0" + min:min
 sec = (sec < 10 ) ? "0" + sec:sec

 currentTime[0].textContent = min + ":" + sec 
 totalTime(song.duration)
}

function totalTime(seconds){
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)

    currentTime[0].textContent += "/" + min +":" + sec

}

function next(){
    currentSong++
    if(currentSong >= data.song.length){
        currentSong = 0
    }
    playSong()
}
function prev(){
    currentSong--
    if(currentSong >= data.song.length){
        currentSong = 0
    }
    playSong()
}


function mute(){
     let mute = document.getElementById("mute")
    if(song.muted){
        song.muted = false
        mute.src = "images/volume.png"

    }else{
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}

function decrease(){
  
    song.volume -= 0.2
    if(song.volume <= 0.2){
        song.volume = 0
         mute.src = "images/volume-down.png"
    }
}

function increase(){
    song.volume += 0.2
    mute.src = "images/volume.png"
    
}