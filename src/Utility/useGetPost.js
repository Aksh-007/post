import { useEffect, useState } from "react";
import { POST_API_URL } from "../Constant/constant";



const useGetPost = () => {
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPost()
    }, [])


    async function fetchPost() {
        try {
            const jsonData = await fetch(POST_API_URL);
            const data = await jsonData.json();
            // console.log(data?.posts)
            setPost(data?.posts);

        } catch (error) {
            console.log(error)
        }
    }
    return post;
}
export default useGetPost;