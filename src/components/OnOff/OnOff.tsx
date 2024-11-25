import React from 'react';
import style from './OnOff.module.css';

type PropsType = {
  isOn: boolean
  onClick: (value: boolean) => void
}

export const OnOff = ({isOn, onClick}: PropsType) => {
  return (
    <div className={style.buttonWrapper}>
      <button className={`${style.button} ${isOn && style.isOn}`} onClick={() => onClick(true)}>On</button>
      <button className={`${style.button} ${!isOn && style.isOff}`} onClick={() => onClick(false)}>Off</button>
      <div className={`${style.indicator} ${isOn ? style.isOn : style.isOff}`}></div>
    </div>
  );
};