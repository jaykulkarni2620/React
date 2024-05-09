import styles from "./Button.module.css"

const Button = (props) => {
    console.log(props);
    return(
        <div className={`${styles.content_btn}`}>
        <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
            {props.text}
        </button>
        </div> 
        
    )
}

export default Button
