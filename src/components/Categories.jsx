import React, { useState } from "react";

export function Categories() {
    const [content, setContent] = useState(<CategoriesList showForm={showForm} />);
    
    function showList(){
        setContent(<CategoriesList showForm={showForm} />);
    }

    function showForm(){
        setContent(<CategoriesForm showList={showList} />);
    }

    return (
        <div className="container my-5">
            {content}
        </div>
    );
}

function CategoriesList({ showForm }) {
    return (
        <>
            <h2 className="text-center mb-3">List of Categories</h2>
            <button onClick={showForm} type="button" className="btn btn-primary me-2">Create</button>
        </>   
    );
}

function CategoriesForm({ showList }) {
    return (
        <>
            <h2 className="text-center mb-3">Create New Categories</h2>
            <button onClick={showList} type="button" className="btn btn-secondary me-2">Cancel</button>
        </>   
    );
}
