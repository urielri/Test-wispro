import React, { useState } from 'react';

import { colores, useChange } from '../colores';
function TextArea({ desc, onChange, value }) {
  const [stat, setStat] = useState(false);
  const isRef = React.useRef(null);
  const changefocus = useChange(stat, isRef);

  const isfocus = () => {
    setStat(true);
  };
  const notFocus = () => {
    setStat(false);
  };
  return (
    <div className="textarea">
      <div className={changefocus ? 'content active' : 'content'}>
        <label htmlFor="textarea">
          <span> {desc}</span>
        </label>
        <textarea
          autoComplete="off"
          id="textarea"
          onChange={onChange}
          value={value}
          onFocus={isfocus}
          onBlur={notFocus}
          ref={isRef}
        ></textarea>
      </div>
      <style jsx>
        {`
          .textarea {
            width: 350px;
            height: 150px;
            background: transparent;
          }
          .content {
            border: 2px solid ${colores.gris};
            border-radius: 5px;
            height: 100%;

            transition: all 0.2s 0s ease-out;
          }
          .active {
            border-color: ${colores.principal};
          }
          .active label > span {
            transform: translate(20px, -15px);
            color: ${colores.principal};
          }
          textarea {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 20px 15px;
            line-height: 1.12;
            border: none;
            background: transparent;
            outline: none;
            resize: none;
            color: ${colores.negro};
          }
          label {
            margin: 0;
            border: 0;
            padding: 0;
          }
          label > span {
            background: #f5f5f5;
            padding: 0 4px;
            display: flex;
            position: absolute;
            user-select: none;
            transition: transform 0.2s;
            transform: translate(5px, 10px);
            color: ${colores.gris};
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
          }
          textarea::placeholder {
            color: ${colores.negro};
          }

          .content:focus {
            border-color: ${colores.principal};
          }
          @media (min-width: 320px) {
            .textarea {
              max-width: 300px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default TextArea;
