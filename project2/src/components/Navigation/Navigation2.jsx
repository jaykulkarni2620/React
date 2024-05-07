import styles from "./Navigation.module.css"

const Navigation = () => {
    return(
    <>
    <div className="container">
            <div className="content">
                <div className="Logo">
                    <img src="/images/logo.png" alt="" />
                </div>
         <nav className={`${styles.navigation} container`}>
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