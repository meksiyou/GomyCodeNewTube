import React from 'react'


function Video() {
    return (
        <div className="jareb" >
            <div className="video">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/YezCSXsvTQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <p id="title">مسلسل شوفلي حل - الموسم 2007 - الحلقة الثامنة عشر </p>
            </div>
            <div className="likes">
            <i className="fas fa-thumbs-up"> <span className="share">25k</span></i>
            <i className="fas fa-thumbs-down"> <span className="share">0k</span> </i>
            <i className="fas fa-share-alt"> <span className="share"> Share </span></i>
            <i className="fas fa-save"> <span className="share">Save</span></i>
            </div>



        </div>
        
    )
}

export default Video
