import styles from '../styles/login.module.css'
import image from '../assets/image.png'
import Login from './login';
import { useState } from 'react'
import  { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function login() {
    const [isLoading, setIsLoading] = useState(false)
    const [useData, setUseData] = useState({
        email: "",
        password: "",
    })
    const loginHandler =async (e) => {
    try {        
            e.preventDefault()
            setIsLoading(true)
            const response =await login({ data: useData})
            if (response.ok) {
                toast.success("Account login successfully")
                Navigate("/register")
            } else {
                toast.error("Something went wrong")
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
            setIsLoading(false)
        }
    }
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
                        width: "40vw",
                        maxWidth:"400px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Email" value={useData.email} onChange={(e) => setUseData({ ...useData, email: e.target.value})}/>
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth:"400px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }}type="password" placeholder="Password" value={useData.password} onChange={(e) => setUseData({ ...useData, password: e.target.value})}/>
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
                    }} type="submit" onClick={loginHandler}>{isLoading ? "logging account..." : "Login"}</button>
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


 