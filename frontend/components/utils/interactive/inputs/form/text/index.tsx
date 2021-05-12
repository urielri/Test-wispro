import React, { useRef, useState, useEffect } from 'react';
import { colores, useChange } from '../colores';
function Text(props) {
  const {
    onChange,
    handlePress,
    desc,
    width,
    disabled,
    value,
    err,
    name,
    message,
  } = props;
  const isRef = useRef(null);
  const ref2 = useRef(null);
  var controler: any;
  useEffect(() => {
    if (value !== '' && value !== undefined) {
      isRef.current.value = value;
      ref2.current.classList.add('active');
    }
    if (disabled) {
      ref2.current.classList.add('disabled');
    }
  }, []);
  useEffect(() => {
    function change() {
      ref2.current.addEventListener('keydown', retard);
    }
    change();
    return () => {
      ref2.current.removeEventListener('keydown', retard);
    };
  });
  useEffect(() => {
    if (value !== isRef.current.value && value !== '' && value !== undefined) {
      isRef.current.value = value;
      ref2.current.classList.add('active');
    }
  }, [value]);

  useEffect(() => {
    if (disabled) {
      ref2.current.classList.add('disabled');
    } else {
      ref2.current.classList.remove('disabled');
    }
  }, [disabled]);
  useEffect(() => {
    if (err) {
      ref2.current.classList.add('err');
    } else {
      ref2.current.classList.remove('err');
    }
  }, [err]);
  const isfocus = () => {
    ref2.current.classList.add('active');
  };
  const notFocus = () => {
    if (isRef.current.value === '') {
      ref2.current.classList.remove('active');
    }
  };
  const retard = (e) => {
    if (e.key !== 'Enter') {
      console.log(e)
      clearTimeout(controler);
      controler = setTimeout(() => {
        const obj = {
          target: { value: '', type: name },
        };
        obj.target.value = isRef.current.value;
        onChange(obj);
        clearTimeout(controler);
      }, 250);
    }
  };

  return (
    <div className="containerText">
      <div className={'content'} ref={ref2}>
        <div className="input">
          <label htmlFor={name}>
            <span>{desc}</span>
          </label>
          <input
            type="text"
            id={name}
            name={name}
            onKeyPress={handlePress}
            onChange={onChange}
            onFocus={isfocus}
            onBlur={notFocus}
            ref={isRef}
            disabled={disabled}
            autoComplete='false'
          />
        </div>
      </div>
      {err ? (
        <span className="msjError">{message === '' ? null : message}</span>
      ) : null}
      <style jsx>
        {`
          .form {
            margin: 0;
          }
          .containerText {
            display: flex;
            flex-direction: column;
            width: ${width || '350px'};
            max-height: 78px;
            height: auto;
            position: relative;
          }
          .content {
            border: 2px solid ${colores.gris};
            border-radius: 10px;
            width: 100%;
            height: 45px;
            display: flex;
            padding: 0;
            align-items: center;
            transition: all 0.2s ease-out;
          }
          .active {
            border-color: ${colores.principal};
          }
          .active label > span {
            transform: translate(10px, -25px);
            color: ${colores.principal};
          }
          .disabled {
            border-color: #ebebeb;
          }
          .disabled label > span {
            color: #ebebeb;
          }
          .disabled input {
            color: #cfcfcf;
          }
          .disabled .active {
            border-color: #cfcfcf;
          }
          .err {
            border-color: ${colores.rojo};
          }
          .err label > span {
            color: ${colores.rojo};
          }
          .msjError {
            margin-top: 3px;
            height: 20px;
            color: ${colores.rojo};
            font-size: 0.86rem;
          }
          input[type='text'] {
            border: none;
            width: 95%;
            height: 100%;
            display: flex;
            color: ${colores.negro};
            position: relative;
            background: none;
            outline: none;
            margin-left: 5px;
            padding: 0 10px;
          }
          .input {
            display: flex;
            position: absolute;
            width: 100%;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
            color: red !important;
          }
          label {
            border: none;
            margin: 0;
            padding: 0;
          }
          label > span {
            color: ${colores.gris};
            width: auto;
            display: flex;
            z-index: 3;
            user-select: none;
            cursor: pointer;
            font-weight: bold;
            background: #fff;
            border-radius: 5px;
            position: absolute;
            transition-duration: 0.2s;
            transition-property: transform, color;
            padding: 0 10px;
            margin: 0 0 5px 10px;
          }
          @media (min-width: 320px) {
            max-width: 300px;
            width: auto;
          }
        `}
      </style>
    </div>
  );
}
export default React.memo(Text);
