import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./PrivacyPolicy.module.css"

function PrivacyPolicy() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/")
    }

  return (
    <div className={styles.mainContainer}>
        <h1>Privacy Policy</h1>
        <div className={styles.privacyPolicyContainer}>
            <h2>1. Introduction</h2>
            <p1>At Super-App, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our service</p1>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:

1. Personal Information: Information such as your name, email address, phone number, and other details when you sign up for our service.
2. Usage Data: We automatically collect data related to how you interact with our service, such as your IP address, browser type, device information, and pages visited.</p>
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies are small data files stored on your device. You can manage cookie preferences through your browser settings.</p>
            <h2>4. Data Security</h2>
            <p>We take reasonable steps to ensure that your information is stored securely. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
            <h2>5.Third-Party Links</h2>
            <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.</p>
            
        </div>
        <button className={styles.gobackButton} onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default PrivacyPolicy
