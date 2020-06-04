import React from 'react';
import Option from './Option';

const Options = (props) =>
    (
        <div>
            <button 
            onClick={props.handleDeleteOptions}
            className="button button--link"
            >
            Remove All
            </button>
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


export default Options;