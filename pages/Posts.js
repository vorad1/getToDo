import {useContext, useEffect, useState} from 'react'; 
import {UserContext} from './UserContext.js';

function Posts(props) {
    const [listOfPost, setListOfPost] = useState([]);
    const {userId, setUserId} = useContext(UserContext);
    function getPosts(userId) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(json => setListOfPost(json))
        .catch(error => console.log(error));
    }
  useEffect (( ) => {
    getPosts(userId);
  }, [userId]);
  
  return (<div>
    <ul>
    {listOfPost.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
    </div>);
}

export default Posts;