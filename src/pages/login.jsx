import styles from '../styles/login.module.css'
export default function Login() {
    return <div className={styles.container} style = {{
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }}>
        <div className={styles.leftContainer}>
            <div >
                <h1>Already have an account?</h1>
                <h3 style={{
                    color: "#525252"
                }}>Your personal job finder is here</h3>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>
                    <input style={{
                        padding: "10px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Email"/>
                    <input style={{
                        padding: "10px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }}type="password" placeholder="Password"/>
                    <button style={{
                        width: "40%",
                        background: "#ed5353",
                        color: "white",
                        borderRadius:"5px",
                        padding: "10px",
                        border:"none",
                        cursor:"pointer",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }} type="submit" placeholder="Submit">Sign in</button>
                    <h3 style={{
                    color: "#525252"
                    }}>Don't have an account? <span style={{
                        color:"black",
                        textDecoration: "underline",
                        textUnderlineOffset: "5px",
                        cursor: "pointer"
                    }}>Sign up?</span></h3>
                </form>
            </div>
        </div>
        <div className={styles.rightContainer}></div>
    </div>
}


 