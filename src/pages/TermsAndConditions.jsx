import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./TermsAndConditions.module.css"
function TermsAndConditions() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/")
        // console.log("you clicked go back...")
    }
  return (
    <div className={styles.mainContainer}>
        <h1>Terms And Conditions</h1>
        <div className={styles.tNcContainer}>
            <h2>1. Introduction</h2>
            <p1>Welcome to Super-App.By accessing or using our service, you agree to comply with these terms. If you disagree with any part of these Terms, you may not use our service.</p1>
            <h2>2. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and your continued use of our service will indicate acceptance of the revised Terms.</p>
            <h2>3. Use of Our Service</h2>
            <p>You agree to use our service only for lawful purposes and in a way that does not infringe on the rights of anyone else, or restrict or inhibit anyone else's use of the service.</p>
            <h2>4. User Accounts</h2>
            <p>When you create an account with us, you must provide accurate information. You are responsible for maintaining the confidentiality of your account and password.</p>
            <h2>5.Limitation of Liability</h2>
            <p>In no event shall Super-App or its suppliers be liable for any damages arising out of the use or inability to use the service.</p>
            <h2>6. Termination</h2>
            <p>We may terminate or suspend your access to the service immediately, without prior notice or liability, if you breach the Terms.
            </p>
            
        </div>
        <button className={styles.gobackButton} onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default TermsAndConditions
