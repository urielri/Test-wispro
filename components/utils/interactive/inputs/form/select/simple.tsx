
//import {Select, Option} from './'
import styles from '../style.module.scss'
import {useEffect, useRef} from 'react'
function Simple (props: any){
  const {children, onChange, disabled, value, err, width} = props
  useEffect(()=>{if(err){
        r.current.classList.add(styles.error)
  }},[err])
  const r = useRef(null)
  const animation = () =>{
    r.current.classList.add(styles.active)
  }
  const closeAnim =() => {
    r.current.classList.remove(styles.active)
  }
  return(
    <div className={styles.containerSimple} ref={r} style={width && {width: width}} onMouseOut={closeAnim}>
      <select onChange={onChange} onClick={animation} value={value} disabled={disabled} className={styles.select}>

        {
            children
        }

      </select>
    </div>
  )

}
export default Simple
//    <Select id='simple' onChange={banana} label={false} value={'0'}></Select>
