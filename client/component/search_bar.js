import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    // this.props.onSearchTermChange(term);
    console.log(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Looking to get rekt?"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

}

export default SearchBar;
