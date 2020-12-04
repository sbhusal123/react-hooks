import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";

// Without Using useReducer
// function DataFetchingUseState() {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [post, setPost] = useState({});

//     useEffect(() => {
//         axios
//             .get(`https://jsonplaceholder.typicode.com/posts/1`)
//             .then(res => {
//                 setLoading(false);
//                 setPost(res.data);
//                 setError("");
//             })
//             .catch(err => {
//                 setLoading(false);
//                 setPost([]);
//                 setError("Something Went Wrong!!");
//             });
//     }, []);

//     return (
//         <div>
//             <p align="Center">{loading ? "Loading..." : post.title}</p>
//         </div>
//     );
// }

const initialState = {
    loading: true,
    error: "",
    post: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ""
            };
        case "FETCH_ERROR":
            return {
                loading: false,
                post: [],
                error: "Something went wrong.."
            };
        default:
            return state;
    }
};

function DataFetchingOne() {
    const [state, disptach] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/2`)
            .then(res => {
                disptach({ type: "FETCH_SUCCESS", payload: res.data });
            })
            .catch(err => {
                disptach({ type: "FETCH_ERROR", payload: err.body });
            });
    }, []);

    return (
        <div>
            <p align="center">
                {state.loading ? "Loading..." : state.post.title}
            </p>
            <p align="center">{state.error == "" ? "" : state.error}</p>
        </div>
    );
}

export default DataFetchingOne;
