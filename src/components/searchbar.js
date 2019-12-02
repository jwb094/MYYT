import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchterm : ''
        };
        this.getValue = this.getValue.bind(this);
        }

        //get value from searchbar
        getValue() {
            this.setState(state => ({
                searchterm:document.getElementById('search_term').value
            }));
            this.props.Test = this.state.searchterm;
            return this.state.searchterm;
          }
          
    render() {
            
        return( 
        <div class="input-group mb-3">
        <input type="text" class="form-control" id="search_term" placeholder="Recipient's username" aria-describedby="button-addon2"></input>
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={this.getValue}>Button</button>
        </div>
        </div>
            
            

            
      
            )
        }


}

export default SearchBar;