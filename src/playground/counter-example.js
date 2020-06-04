class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    componentDidMount() {
        try {

            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }

            console.log('componentDidMount');
        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdateOut');
        if (prevState.count !== this.state.count) {
            // const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', this.state.count);
            console.log('componentDidUpdate');
        }

    }


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>

            </div>
        );
    }

}


// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     // console.log('minusOne');
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     // console.log('reset');
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="someId" onClick={addOne}>+1</button>
//             <button id="minusId" onClick={minusOne}>-1</button>
//             <button id="resetId" onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
