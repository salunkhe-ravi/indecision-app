import React from 'react';

export default class AddOption extends React.Component {

    state ={
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const txtValue = e.target.elements.addOptionTxt.value.trim();
        const error = this.props.handleAddOption(txtValue);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.addOptionTxt.value = '';
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.error && <p className="add-option-error">{this.state.error}</p>
                }
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="addOptionTxt"></input>
                    <button className="button">Submit</button>
                </form>
            </div>

        );
    }

}
