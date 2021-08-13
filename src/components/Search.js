import React from 'react';

const Search = ({getSearchValue})=>{
    return(
        <section className="search-input">
            <input type="text" className="mx-auto d-block" placeholder="Search your favourite characters" onChange={getSearchValue}/>
        </section>
    )

}
export default Search