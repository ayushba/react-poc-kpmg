import React from "react";

import './SegmentTabs.css'

const SegmentTabs = ({
    tabs,
    setSelectedCategory
}) => {

    return (
        <div className="tabsContainer">
            {tabs.map((tab, index) => {
                return (
                    <>
                        <p
                            className="tabItem"
                            onClick={() => {
                                setSelectedCategory([tab])
                            }}
                        >
                            {tab}
                        </p>
                        {index !== (tabs.length - 1) ? <p className="verticleLine" >.</p> : null}
                    </>
                )
            })}
        </div>
    )
}

export default SegmentTabs