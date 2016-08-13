import React, { Component } from 'react';

const sample = (ComputedComponent) => {
    return class SampleDecorator extends Component {
        render() {
            return (
                <div className="SampleDecorator">
                    @Decorated
                    <ComputedComponent {...this.props} />
                </div>
            );
        }
    }
}

export default sample;
