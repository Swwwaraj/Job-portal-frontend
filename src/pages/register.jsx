import styles from '../styles/login.module.css'
import image from '../assets/image.png'
export default function Register() {
    return <div className={styles.container} style = {{
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }}>
        <div className={styles.leftContainer}>
            <div >
                
                <h1> Create an account </h1>
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
                    }} type="text" placeholder="Name"/>
                    <input style={{
                        padding: "10px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Email"/>
                    <input style={{
                        padding: "10px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Mobile"/>
                    <input style={{
                        padding: "10px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }}type="password" placeholder="Password"/>
                    <label>
                        <input type="checkbox" name="terms" />
                        By creating an account, I agree to our terms of use and privacy policy.
                    </label>
                    <button style={{
                        width: "70%",
                        background: "#ed5353",
                        color: "white",
                        borderRadius:"5px",
                        padding: "10px",
                        border:"none",
                        cursor:"pointer",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }} type="submit" placeholder="Submit">Create Account</button>
                    <h3 style={{
                    color: "#525252"
                    }}>Already have an account? <span style={{
                        color:"black",
                        textDecoration: "underline",
                        textUnderlineOffset: "5px",
                        cursor: "pointer"
                    }}>Sign in?</span></h3>
                </form>
            </div>
        </div>
        <div className={styles.rightContainer}
            style= {{
                flex: 1,
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                position:'relative'
            }}>
                <img
                src={image}
                alt='Login Image'
                style={{width:'100%', height:'100%'}}/>
                <h1
                style={{
                    position:'absolute',
                    color:'white',
                    top:'50px',
                

        
                }}> Your Personal Job Finder </h1>
                
        </div>
    </div>
}


 