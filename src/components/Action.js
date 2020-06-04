import React from 'react';

const Action = (props) =>
    (
        <div>
            <button
                className="big_button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    );

export default Action;