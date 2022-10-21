import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from './Shared/NewsSummary';
const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>Category news {categoryNews.length}</h1>
            {
                categoryNews.map(news=><NewsSummary key={news._id} news={news}></NewsSummary>)
            }
        </div>
    );
};

export default Category;