import React, { useState, useEffect } from "react";
import axios from "axios";

function SinglePostFetch() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
            )
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [idFromButtonClick]);

    const handleClick = () => {
        setIdFromButtonClick(id);
    };

    return (
        <div style={{ margin: "20% 20%" }}>
            <input
                type="text"
                value={id}
                placeholder="Type post id"
                onChange={e => setId(e.target.value)}
            />
            <button type="button" onClick={handleClick}>
                {" "}
                Fetch Post
            </button>
            {post.id ? (
                <ul>
                    <li key={post.id}>{post.title}</li>
                </ul>
            ) : null}
        </div>
    );
}

export default SinglePostFetch;
