import React from 'react';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const cn = `overlay col-sm-5 col-sm-offset-2 ${this.props.visibility}`;
    return (
      <form className = {cn} >
        <input />
      </form>
    );
  }
}

export default FormView;
