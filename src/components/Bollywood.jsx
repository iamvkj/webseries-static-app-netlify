import React from "react"
import BollywoodCard from "./BollywoodCard";
import BollywoodData from "./BollywoodData";

const Bollywood = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        BollywoodData.map((element) => {
                            return (
                                <div className="col-md-4" key={element.id}>
                                    <BollywoodCard imgsrc={element.imgsrc} source={element.source} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 120,) : "..."} lastRDate={element.lastRDate} season={element.season} author={element.author} updated={element.updated} link={element.link}
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

export default Bollywood;