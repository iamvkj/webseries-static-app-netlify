import React from "react";
import HollywoodCard from "./HollywoodCard";
import HollywoodData from "./HollywoodData";

const Hollywood = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        HollywoodData.map((element) => {
                            return (
                                <div className="col-md-4" key={element.id}>
                                    <HollywoodCard imgsrc={element.imgsrc} source={element.source} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 120,) : "..."} lastRDate={element.lastRDate} season={element.season} author={element.author} updated={element.updated} link={element.link}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Hollywood;