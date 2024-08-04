let youtubeSocket: SocketLibSocket | undefined;

let input = $("<input id='vidIdInput' style='background: #fffff5cc'>");

let iconPlay = $("<i class='fas fa-play'></i>")

function handleVideoToggle() {
    let content = input.val() as string;
    if (iconPlay.hasClass("fa-play")) {
        youtubeSocket?.executeForEveryone("load-video", content)
    }
    if(iconPlay.hasClass("fa-stop")) {
        youtubeSocket?.executeForEveryone("stop-video", content)
    }
    iconPlay.toggleClass("fa-play fa-stop")
}

