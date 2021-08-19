import React from 'react'
import {commentList} from "../Data"
function Comments() {
    return (
        <div className="row d-flex justify-content-center">
            {commentList.map(el => 
                <div classeName="card p-3">
                <div classeName="d-flex justify-content-between align-items-center">
                    <div classeName="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/hczKIze.jpg" width="30" classeName="user-img rounded-circle mr-2" alt="taswira" /> <span><small classeName="font-weight-bold text-primary">james_olesenn</small> <small classeName="font-weight-bold">Hmm, This poster looks cool</small></span> </div> <small>2 days ago</small>
                </div>
                <div classeName="action d-flex justify-content-between mt-2 align-items-center">
                    <div classeName="reply px-4"> <small>Remove</small> <span classeName="dots"></span> <small>Reply</small> <span classeName="dots"></span> <small>Translate</small> </div>
                    <div classeName="icons align-items-center"> <i classeName="fa fa-star text-warning"></i> <i classeName="fa fa-check-circle-o check-icon"></i> </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Comments
