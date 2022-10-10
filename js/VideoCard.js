class VideoCard {
    render(video, title) {
        return (
            `<div class="video_card">
            <video src="${video}" controls></video>
            <h3 class="card_title">${title}</h3>
        </div>`
        )
    }
}

export default new VideoCard;