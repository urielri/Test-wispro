import { colores } from '../colores'
import React, { useEffect, useRef } from 'react'
function Radio({ desc, value, name, checked, disabled }) {
  const isRef = useRef(null)
  useEffect(() => {
    if (checked) {
      isRef.current.checked = checked
    }
  }, [])
  return (
    <div className="containerRadio">
      <input
        type="radio"
        value={value}
        name={name}
        id={'radio' + desc}
        ref={isRef}
        disabled={disabled}
      />
      <div className="content">
        <span className="object"></span>
        <label htmlFor={'radio' + desc}>
          <span>{value}</span>
        </label>
      </div>
      <style jsx>
        {`
          .containerRadio {
            display: flex;
            width: auto;
            height: 45px;
            margin: 10px;
          }
          .content {
            padding: 0 10px;
            display: grid;
            grid-template-columns: minmax(30px, auto);
            width: auto;
            height: 100%;
            box-sizing: border-box;
            transition: all 0.2s ease-out;
            position: relative;
            border-radius: 5px;
            justify-content: center;
            align-items: center;
          }
          .object {
            width: 4px;
            height: 4px;
            display: flex;
            position: absolute;
            border-radius: 4px;
            background: ${colores.gris};
            transition: all 0.2s;
          }
          input[type='radio'] {
            display: none;
            outline: none;
          }
          input[type='radio']:checked + .content label > span {
            border: none;
            transform: translateX(2px);
            color: ${colores.celeste};
          }
          input[type='radio']:checked + .content > .object {
            background: ${colores.celeste};

            height: 4px;
            width: 10px;
          }
          input[type='radio']:checked + .content {
            border-color: ${colores.celeste};
          }
          input[type='radio']:disabled + .content > .object {
            width: 12px;
            height: 4px;
            background: ${colores.grisClaro};
          }
          input[type='radio']:disabled + .content label > span {
            cursor: not-allowed;
            color: ${colores.grisClaro};
          }
          label {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          label > span {
            display: flex;
            padding-left: 6px;
            transform: translateX(0px);
            user-select: none;
            transition: all 0.2s;
            font-weight: bold;
            color: ${colores.gris};
          }
        `}
      </style>
    </div>
  )
}
export default Radio
