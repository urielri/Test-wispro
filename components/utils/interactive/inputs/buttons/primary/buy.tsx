import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { Check, Close } from '@/components/SVG';
function ButtonBuy(props) {
  const { children, width, onClick, loader, res, disabled } = props;
  const r = useRef(null);
  const r2 = useRef(null);

  // const [currentType, setCurrentT] = useState(styles.default);
  useEffect(() => {
    if (loader) {
      r.current.classList.add(styles.loadingBuy);
      r2.current.classList.add(styles.loadContainer);
    } else {
      r.current.classList.remove(styles.loadingBuy);
      r.current.classList.remove(styles.succes);
      r2.current.classList.remove(styles.loadContainer);
    }
  }, [loader]);
  useEffect(() => {
    r.current.classList.remove(styles.loadingBuy);
    if (res) {
      r.current.classList.add(styles.succes);
    } else if (res === false) {
      r.current.classList.add(styles.error);
    }
  }, [res]);
  return (
    <div
      ref={r2}
      className={styles.buttonBuy}
      onClick={onClick}
      style={{ width: width && width }}
      id={children.length}
    >
      <button className={styles.anim} ref={r} disabled={disabled}>
        {loader ? (
          res !== null && <span>{res ? <Check /> : <Close />}</span>
        ) : (
          <span>{children}</span>
        )}
      </button>
    </div>
  );
}
export default React.memo(ButtonBuy);
