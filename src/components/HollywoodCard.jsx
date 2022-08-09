import React from "react";

const HollywoodCard = (props) => {

    return (
        <>
            <div className="card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className="badge rounded-pill bg-dark">{props.source}</span>
                </div>
                <img src={props.imgsrc} className="card-img-top" style={{height: "250px"}} alt="alltype" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-primary">Last Release Date: {props.lastRDate}</small></p>
                    <p className="card-text"><small className="text-info">Season: {props.season}</small></p>
                    <p className="card-text">
                        <small className="text-danger">By {props.author} on {props.updated}</small>
                    </p>
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Watch Now</a>
                </div>
            </div>
        </>
    )
}

export default HollywoodCard;