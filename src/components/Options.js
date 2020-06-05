import React from 'react';
import Option from './Option';

const Options = (props) =>
    (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    onClick={props.handleDeleteOptions}
                    className="button button--link"
                >
                    Remove All
            </button>
            </div>
            {props.options.length === 0 && 
                <p 
                className="widget__mesage"
                >
                Please add options to get started!
                </p>}
            {
                props.options.map(
                    (opt, index) => <Option
                        key={opt}
                        optionText={opt}
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            }
        </div>
    );


export default Options;