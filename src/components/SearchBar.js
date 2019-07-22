import React from 'react';

class SearchBar extends React.Component {
    state = { val: '' }

    onInputChange = (event) => {
        this.setState({ val: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label><h2>Uplash Image Search </h2></label>
                    <div className="inputContain">
                    <input
                        className="inputStyle"
                        type="text"
                        value={this.state.val}
                        onChange={this.onInputChange}
                    />
                    <input className="submitStyle" type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
