import { FormProps } from 'models/models';
import React from 'react';

export class SimpleForm extends React.Component<FormProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    const resultTitle = this.input.current?.value ?? '';
    alert('Отправленное имя: ' + resultTitle);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
