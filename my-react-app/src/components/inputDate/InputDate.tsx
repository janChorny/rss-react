import { InputDateInterface } from 'models/models';
import React, { Component } from 'react';

// export class InputDate extends Component<InputDateInterface> {
//   render() {
//     const { valid, inputRef } = this.props;
//     return (
//       <div className="form__date form-block">
//         <label className="form__date--label form-label" htmlFor="form__date">
//           Date:
//         </label>
//         <input
//           className="form__date--input form-input"
//           type="date"
//           id="form__date"
//           ref={inputRef}
//           placeholder="day.month.year"
//           autoComplete="off"
//         />
//         {!valid && (
//           <span className="form__date--span error-span">Error! No future date is allowed</span>
//         )}
//       </div>
//     );
//   }
// }

export function InputDate({ valid, inputRef }: InputDateInterface) {
  return (
    <div className="form__date form-block">
      <label className="form__date--label form-label" htmlFor="form__date">
        Date:
      </label>
      <input
        className="form__date--input form-input"
        type="date"
        id="form__date"
        ref={inputRef}
        placeholder="day.month.year"
        autoComplete="off"
      />
      {!valid && (
        <span className="form__date--span error-span">Error! No future date is allowed</span>
      )}
    </div>
  );
}
