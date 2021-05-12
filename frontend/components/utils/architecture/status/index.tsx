import Controller from './controller'
import styles from './style.module.scss'
function Status ():JSX.Element{
    return(
        <div className={styles.containerStatus}>
            <Controller/>
            <Controller/>
            <Controller/>
        </div>
    )
}
export default Status