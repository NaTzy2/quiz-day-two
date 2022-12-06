import React from "react";

import { useParams, useLocation } from "react-router-dom";

const PostPage = ()=>{
    // const {id} = useParams()
    const {state} = useLocation()

    return (
        <>
            <h1>Post Page</h1>
            <h2>{state.name}</h2>
            <h3>{state.content}</h3>
        </>
    )
}

export default PostPage