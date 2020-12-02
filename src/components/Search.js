import React from 'react'

const Search = (props) => {
  
    return(
        <div>
            <input class="input" placeholder="SEARCH. WRITE A LETTER (A-Z)" type="text" onChange={(event)=>props.changeSearchedWord(event.target.value)}/>
        </div>
    )
  }
  
  export default Search