import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        };
        this.getValue = this.getValue.bind(this);
        }

        //get value from searchbar
        getValue() {
            this.setState({
                term:document.getElementById('search_term').value
            });
           
            this.props.handleFormSubmit(this.state.term);
            console.log(this.state.term);
            return this.state.term;
          }
          
    render() {
            
        return(
            <div class="col-sm-12">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="search_term" placeholder="Recipient's username" aria-describedby="button-addon2"></input>
                    <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={this.getValue}>Button</button>
                    </div>
                </div>
            </div> 
        
            
            

            
      
            )
        }


}

export default SearchBar;