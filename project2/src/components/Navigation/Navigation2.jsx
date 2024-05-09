import styles from "./Navigation2.module.css"

const Navigation = () => {
    return(
    <>
    <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                <div className="Logo">
                    <img src="/images/logo.png" alt="" />
                </div>
         <nav className={`${styles.navigation}`}>
            <ul>
                <li><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li><a>CONTACT</a></li>
            </ul>
         </nav>
        </div>
    </div>
    </>
    )
}

export default Navigation