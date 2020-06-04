class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({ options}));
            }

        } catch (e) {
            //do nothing at all

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('componentDidUpdate');
        }           
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        // this.setState(()=> {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));

    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });

        this.setState((prevState) => ({ 
            options: prevState.options.concat([option]) 
        }));
    }

    render() {
        // const title = "testing";
        const subTitle = "Put your life in the hands of a computer";
        // const options = ['#1', '#2', '#3'];

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }

}

// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {
                props.subTitle && <h2>{props.subTitle}</h2>
            }
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {

    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    );

}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add options to get started!</p>}
            {
                props.options.map(
                    (opt) => <Option 
                    key={opt} 
                    optionText={opt} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
                )
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={
                (e) => {
                    props.handleDeleteOption(props.optionText);
                }
            }>remove</button>
        </div>
    );
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const txtValue = e.target.elements.addOptionTxt.value.trim();
        const error = this.props.handleAddOption(txtValue);

        // this.setState(() => {
        //     return {
        //         error
        //     };
        // });

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.addOptionTxt.value = '';
        }

        // if (txtValue) {
        //     this.props.handleAddOption(txtValue);
        // }
    }

    render() {
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="addOptionTxt"></input>
                    <button>Submit</button>
                </form>
            </div>

        );
    }

}

// const User = (props) => {

//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age:{props.age}</p>
//         </div>

//     );

// };

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'));
