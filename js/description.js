import {commentContainer, castContainer} from './query.js'
import CommentCard from './CommentCard.js'
import CastCard from './CastCard.js'



fetch('../commentDb.json')
.then(resp=> resp.json())
.then(data=>{
    data.forEach(comment => {
      commentContainer.innerHTML += CommentCard.render(comment.userName, comment.time, comment.comment, comment.spoiler_alert)  
    });
    
})

fetch('../castDb.json')
.then(resp => resp.json())
.then(data=>{
data.forEach(cast=>{
    castContainer.innerHTML+= CastCard.render(cast.RealName, cast.ActorName)
})




});