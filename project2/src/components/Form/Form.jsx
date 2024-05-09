import Button from "../Button/Button"
import styles from "./Form.module.css"

const Form = () => {
    return(
        <div className={styles.content_form}>
            <div className={`${styles.content_second}`}>
                <div className={`${styles.top_btn}`}>
        <Button text="VIA SUPPORT CHAT"/>
        <Button text="VIA CALL"/>
        </div>
        <Button 
        isOutline={true}
        text="VIA EMAIL FORM"/>
        <label htmlFor="">Name</label><br />
        <input type="text" /><br />
        <label htmlFor="">E-Mail</label><br />
        <input type="text" /><br />
        <label htmlFor="">Text</label><br />
        <textarea type="text" /><br />
        <div 
        style={{
            display:"flex",
            justifyContent: "end",
            alignItems:'center',
            textAlign:'center'
        }}>
        <Button text="SUBMIT"/>
        </div>
        </div>
        <div className={`${styles.content_img}`}>
            <img src="./images/Service.png" alt="Error" />
        </div>
        </div>
     
    )
}

export default Form