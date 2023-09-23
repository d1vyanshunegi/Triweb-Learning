import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm <span className="name">Divyanshu</span>,<br />
                    a web developer.
                </h1>
                <h2>Fullstack Developer/ MERN / JavaScript / TypeScript</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>&nbsp;
                <a style={{ marginLeft: '7rem' }} href={require("../../assets/Resume.pdf")} className='flat-button' download="DivyanshuNegiResume">RESUME</a>
            </div>
        </div>
    )
  }
  
  export default Home