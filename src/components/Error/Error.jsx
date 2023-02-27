import styles from './Error.module.css';

export default Error = function(){
    return (
        <div className={styles.container}>
            <h1>ERROR 404</h1>
            <h2>Not Found</h2>
            <h3>The resource requested could not be found on this server!</h3>
        </div>
    )
}