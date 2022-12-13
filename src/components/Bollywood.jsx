import React, { useState } from "react";
import BollywoodCard from "./BollywoodCard";
import BollywoodData from "./BollywoodData";
import Navbar from "./Navbar";

const Bollywood = () => {

    const [filteredList, setFilteredList] = useState(BollywoodData);
    const [searchQuery, setSearchQuery] = useState("");

    //Search list of objects
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const searchList = BollywoodData.filter((item) => {
            return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(searchList);
    };

    return (
        <>
            <Navbar searchQuery={searchQuery} handleSearch={handleSearch} />

            <div className="container">
                <div className="row">
                    {
                        filteredList.map((element) => {
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