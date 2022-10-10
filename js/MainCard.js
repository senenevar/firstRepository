class MainCard {
    render(img, title) {
        return (
            `
            <div class="Slider_card">
            <div class="Slider_img-container">
                <img src="${img}"
                    alt="API">
                <span>New</span>
            </div>
            <h3 class="card_title">${title}</h3>
        </div>
    `
        )
    }
}

export default new MainCard;