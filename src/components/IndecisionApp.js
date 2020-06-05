import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {


    state = {
        options: [],
        selectedOption: undefined
    };

    // constructor(props) {
    //     super(props);
    //     // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     // this.handlePick = this.handlePick.bind(this);
    //     // this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     // this.state = {
    //     //     options: []
    //     // };
    // }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleDeleteOptions = () => {

        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));

    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        // alert(option);

        this.setState(() => ({
            selectedOption: option
        }));

    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }

        } catch (e) {
            //do nothing at all

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('componentDidUpdate');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        // const title = "testing";
        const subTitle = "Put your life in the hands of a computer";
        // const options = ['#1', '#2', '#3'];

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">

                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }

}

export default IndecisionApp;