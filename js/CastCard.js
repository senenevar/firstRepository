class CastCard{
    render(realName, actorName){
        return(

            `
            <li class="flex">
            <img src="./images/x1.png" />
            <div>
                <h3>${realName}</h3>
                <p>${actorName}</p>
            </div>
        </li>
            `
        )
    }
}

export default new CastCard;