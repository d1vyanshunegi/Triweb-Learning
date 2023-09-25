import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <>
            <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    Contact Me
                </h1>
                <p>
                    I'm interested and open to new opportunities. However, if you have any other requests or
                    questions, please don't hesitate to contact me.
                </p>
                
                    <a className='flat-button emailB' href="mailto:divyanshunegi1@gmail.com">Email</a>
                    <a
                        href="https://www.linkedin.com/in/divyanshunegi1/"
                        target="_blank"
                        rel="noreferrer"
                        className='flat-button linkedinB'
                    > 
                        
                        <FontAwesomeIcon icon={faLinkedin} className="linkedin"  />
                        Connect</a>
               
            </div>
        </div>
        </>
    )
}

export default Contact