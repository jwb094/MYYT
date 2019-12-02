import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchterm : ''
        };
        this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(state => ({
                searchterm:document.getElementById('search_term').value
            }));
            console.log(this.state.searchterm);
          }
       
        
        // getValue(){
        //     this.state.searchterm =  document.getElementById('search_term').value;
        //      console.log(this.state.searchterm);
        // }

    render() {
            
        return( 
        <div class="input-group mb-3">
        <input type="text" class="form-control" id="search_term" placeholder="Recipient's username" aria-describedby="button-addon2"></input>
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={this.handleClick}>Button</button>
        </div>
        </div>
            
            

            
      
            )
        }


}

export default SearchBar;