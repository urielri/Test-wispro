import { useState, useEffect } from 'react';

export const colores = {
  negro: '#888888',
  gris: '#D5D5D5',
  grisClaro: '#E5E5E5',
  celeste: '#145899',
  principal: '#FFCF53',
  rojo: '#E46262',
};
export const useChange = (bool, reef) => {
  const [stat, setStat] = useState(false);
  useEffect(() => {
    if (bool) {
      setStat(true);
    } else {
      if (reef.current.value !== '') {
        setStat(true);
      } else {
        setStat(false);
      }
    }
  }, [bool]);
  return stat;
};
