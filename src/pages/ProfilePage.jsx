import React from "react";

import { Skeleton } from "antd";

const ProfilePage = ()=>{
    return (
        <>
            <h1>This is Master Gigih's Profile</h1>
            <div className="skeleton-container">
                <Skeleton active/>
            </div>
        </>
    )
}

export default ProfilePage