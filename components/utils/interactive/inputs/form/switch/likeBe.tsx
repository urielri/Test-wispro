import { useEffect, useState } from 'react';
import { Close, Check } from './icons';
export const Switch = ({ onChange, boolan, name }) => {
  /*
  const [check, setCheck] = useState(boolan)
  const handleCheck = () => {
    setCheck((check) => (check ? false : true))
    props.change(check, name)
  }
*/
  return (
    <div className="container">
      <label htmlFor={'switch-' + name} className="label">
        <div className={boolan ? 'switch active' : 'switch'}>
          <div className="sw">
            <input type="checkbox" id={'switch-' + name} onChange={onChange} />
          </div>
          <span className="icon"> {boolan ? <Check /> : <Close />}</span>
        </div>
      </label>
      <style jsx>
        {`
          input[type='checkbox'] {
            display: none;
            outline: none;
            background: none;
            border: 0;
          }
          input[type='checkbox']:active {
            background: none;
            outline: none;
          }
          input[type='checkbox']:focus {
            background: none;
            outline: none;
          }
          .label {
            width: auto;
            height: auto;
            justify-content: center;
          }
          .container {
            display: flex;
            width: 50px;
            height: 28px;
            justify-content: center;
          }
          .switch {
            width: 50px;
            height: 26px;
            border-radius: 100px;
            background: #d5d5d5;
            display: flex;
            box-shadow: 0px 0px 2px 0px rgba(178, 178, 178, 1);
            align-items: center;

            cursor: pointer;
            margin: 0;
          }
          .sw {
            height: 24px;
            width: 24px;
            display: flex;
            align-items: center;
            transform: translateX(2px);
            align-self: center;
            background: white;
            border-radius: 40px;
            transition: all 0.4s ease-out;
            z-index: 1;
            box-shadow: 0px 0px 3px 0px rgba(178, 178, 178, 1);
          }
          .active {
            background: #237ed5;
          }
          .active .sw {
            transform: translateX(24px);
            background: white;
          }
          .active .icon {
            transform: translateX(-16px);
          }

          .icon {
            color: white;
            transform: translateX(6px);
            z-index: 0;
            font-size: 14px;
            font-weight: bold;
          }
          .icon svg {
            width: 12px;
            height: 12px;
          }
        `}
      </style>
    </div>
  );
};

export const TextCheck = (props: any) => {
  const [check, setCheck] = useState(props.boolean);
  const handleCheck = (e: any) => {
    setCheck(e.target.checked);
    props.change(e.target.checked, props.name);
  };

  return (
    <div>
      <div className="title">
        <div className="input">
          <Switch name={props.name} boolan={check} onChange={handleCheck} />
        </div>
      </div>
      <style jsx>
        {`
          .input {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
};
