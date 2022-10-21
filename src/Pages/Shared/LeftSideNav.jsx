import React from 'react';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/categories')
      .then(res=>res.json())
      .then(data=>setCategories(data))
    
      
    }, [])
    
    return (
        <div>
            <h6>All Caterories:{categories.length}</h6>
            <div>
                {
                    categories.map(category=><p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;