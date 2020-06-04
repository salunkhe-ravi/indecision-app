
// Because event handlers will ovewrite the this keyword in your methods unless you bind them. 
// Try it out yourself in React, you'll see that you cannot use them unless you bind them first.

console.log('App.js is running real quick');

//create app object title/subtitle
//use title/subtitle in new template
//render template

const app = {
    title: 'This is the title',
    subtitle: 'this is a sub-title',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log('form submitted');
    renderForm();
};

const removeAll = () => {
    app.options = [];
    renderForm();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    // console.log(randomNum);
}

// JavaScript XML

const appRoot = document.getElementById('app');


const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do?</button>
            <button id="removeAllId" onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((number) => {
                        return <li key={number}> Number: {number}</li>
                    })
                }   

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderForm();

// const user = {
//     name: 'ravi',
//     age: 34,
//     location: 'Mumbai'
// }

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         <p>Age: {user.age}</p>
//         {getLocation(user.location)}
//     </div>
// );



