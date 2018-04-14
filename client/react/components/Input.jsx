import React, { Component } from 'react';

class Input extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
          inputValue: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        if (this.props.defaultValue) {
            this.setState({ inputValue: defaultValue });
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.value !== this.state.value) {
            this.setState({ inputValue: newProps.value });
        }
    }

    onChange(e) {
        const { value, name } = e.target;
        this.setState({ inputValue: e.target.value }, () => {

            this.props.onChange(name, value);
        });
    }

    render() {
        const { defaultValue, inputValue } = this.state;
        const { type, placeholder, name, label, error } = this.props;

        return (
          <div className="field">
            <label>{label}</label>
            <div className="control">
              <input
                className={`input ${ error && 'is-danger' }`}
                name={name}
                type={ type === 'password' ? 'password' : 'text' }
                placeholder={placeholder}
                value={inputValue}
                defaultValue={defaultValue}
                onChange={this.onChange}
              />
              {error && <p class="help is-danger">{error}</p>}
            </div>
          </div>
        )
    }
}

export default Input;
