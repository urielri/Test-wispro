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
    <div className="textCheck">
      <div className="title">
        <h4>{props.title}</h4>
        <div className="input">
          <Switch name={props.name} boolan={check} onChange={handleCheck} />
        </div>
      </div>
      <div className="desc">
        <span>{props.desc}</span>
      </div>
      <style jsx>
        {`
          .textCheck {
            margin-top: 28px;
            width: 100%;
            height: auto;
            display: grid;
            grid-row-gap: 20px;
          }
          .title {
            width: auto;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 50%;
          }

          .input {
            display: flex;
            justify-content: flex-end;
          }
          .desc {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .desc > span {
            font-size: 0.8rem;
            line-height: 1.8;
            width: 70%;
          }
          @media (min-width: 320px) {
            .textCheck span {
              width: 100%;
            }
          }
          @media (min-width: 1024px) {
            .textCheck span {
              width: 70%;
            }
          }
        `}
      </style>
    </div>
  );
};
