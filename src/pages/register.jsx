import styles from '../styles/login.module.css'
import image from '../assets/image.png'
import { register } from '../services/index'
import { useState } from 'react'
import  { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        terms: false
    })
    const registerHandler =async (e) => {
    try {        
            e.preventDefault()
            setIsLoading(true)
            const response =await register({ data: formData})
            if (response.ok) {
                toast.success("Account created successfully")
                Navigate("/login")
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
                        width: "40vw",
                        maxWidth:"400px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value})}/>
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth:"400px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value})}/>
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth:"400px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }} type="text" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value})}/>
                    <input style={{
                        padding: "10px",
                        width: "40vw",
                        maxWidth:"400px",
                        borderRadius: "7px",
                        border: "1px solid #c2c2c2c2"
                    }}type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value})}/>
                    <label>
                        <input type="checkbox" name="terms" id= "terms" style={{
                            color:"#525252"
                        }} value={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.value})}/>
                         By creating an account, I agree to our terms of use and privacy policy.
                    </label>
                    <button disabled ={isLoading} style={{
                        width: "70%",
                        background: "#ed5353",
                        color: "white",
                        borderRadius:"5px",
                        padding: "10px",
                        border:"none",
                        cursor:"pointer",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }} type="submit" onClick={registerHandler}>{isLoading ? "Creating account..." : "Create Account"}</button>
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


 