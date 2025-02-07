import React from 'react'

const NewsItems=(props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } =props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 end-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex:"1"}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={!imageUrl ? "https://etimg.etb2bimg.com/thumb/msid-105804841,imgsize-1201632,width-1200,height=765,overlay-ettelecom/mvas-apps/gta-vi-what-is-driving-the-craze-around-gta-games.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems
