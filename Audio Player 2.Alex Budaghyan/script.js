let data = {
    title:["MiyaGi - Самурай ","MiyaGi & Andy Panda - Minor","MiyaGi & Andy Panda - Там Ревели Горы","MiyaGi & Эндшпиль - Fire Man","Miyagi & Эндшпиль feat. Рем Дигга - I Got Love"],
    song:["music/MiyaGi - Самурай.mp3","music/MiyaGi & Andy Panda - Minor.mp3","music/MiyaGi & Andy Panda - Там Ревели Горы.mp3","music/MiyaGi & Эндшпиль - Fire Man.mp3","music/Miyagi & Эндшпиль feat. Рем Дигга - I Got Love.mp3"],
    poster:["https://i.pinimg.com/originals/3c/95/b7/3c95b76d0d7bd7f2379e6a7ac11d0983.jpg","https://sun9-78.userapi.com/impg/BmWQATsqBTev0pEObU0zenbBJ8rwAwQczxy88A/e8afJ7whn-8.jpg?size=807x727&quality=96&sign=c2fa8c358f32fd9065d2f02fbcea6feb&c_uniq_tag=2hulmpPA0Oy6Tjw0iQfgnMKGmNU-yWuVPwfEr_Q6aVI&type=album","https://images.genius.com/cf2f320a368e711c369764f0b62bf772.1000x1000x1.png","https://www.cevirce.com/lyrics/wp-content/uploads/2021/11/miyagi-%D1%8D%D0%BD%D0%B4%D1%88%D0%BF%D0%B8%D0%BB%D1%8C-fire-man-russisch-songtext-deutsch-uebersetzung-1.jpg","https://cdn1.tenchat.ru/static/vbc-gostinder/2022-05-26/181f4ade-5b2d-4099-84e5-02d289cf6841.jpeg"],

}

let song = new Audio()


let currentSong = 0;



function playSong(){
    song.src = data.song[currentSong]
    let = songTitle = document.getElementsByClassName("songtitle")
    songTitle[0].textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"

    let main = document.getElementsByClassName("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"
}

window.onload = function(){
    playSong()
}

song.play()

function playerPauseSong(){
    let play = document.getElementById("play")

    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}
