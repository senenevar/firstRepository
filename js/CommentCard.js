class CommentCard {
    render(username, time, comment, spoilerAlert) {
        return(
            `
            <li>
            <img src="./images/Ellipse 16.png" />
            <div>
                <h4>${username} <span>${time}</span></h4>
                <p>${comment}</p>
            </div>
    
            ${spoilerAlert ?
                    `<div class="spoiler_alert">
                <span>spoiler alert</span>
            </div>`: ''
                }
        </li>
    `
        )
       
    }
}

export default new CommentCard;