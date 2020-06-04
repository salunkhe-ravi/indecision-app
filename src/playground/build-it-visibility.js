class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {

        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{
                    this.state.visibility ? 'Hide Details' : 'Show Details'
                }</button>
                {
                    this.state.visibility && 
                        <div>
                            Hey, now you can see this text
                        </div>
                    
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {

//     visibility = !visibility;
//     render();

// };

// // const appRoot = document.getElementById('app');

// const render = () => {

//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility} name="test">
//         {visibility ? 'Hide Details' : 'Show Details'}
//         </button>
//         {visibility && (
//             <div>
//             <p>Hey!, now you can see this text</p>
//             </div>
//         )}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// };


// render();
