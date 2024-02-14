import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadFeatures = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
        fetchPosts();
    }, [props]);

    const fetchPosts = async () => {
        const { data } = await supabase
        .from('Posts')
        .select('*')
        .filter('featured', 'eq', true);
      
      setPosts(data);
    }
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                <Card id={post.id} title={post.title} author={post.author} description={post.description} likes={post.likes} canvas={post.canvas}/>
                ) : <h2>{''}</h2>
            }
        </div>  
    )
}

export default ReadFeatures;