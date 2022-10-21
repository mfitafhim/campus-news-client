import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from './Shared/NewsSummary';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>Home Page News {allNews.length}</h1>
            <div>
                {
                    allNews.map(news=><NewsSummary key={news._id} news={news}></NewsSummary>)
                }
            </div>
        </div>
    );
};

export default Home;