import './index.scss'

const Projects = () => {
    return (
        <>
            <h1 className='h1'>My Projects</h1>
            <div className='center'>

                <div className='scroll'>
                    <div className='ticket'>
                        <h2 className='head'>Quiz App Manager</h2>
                        REST API architecture styled project to manage HTTP requests for performing CRUD operations like user registration, quiz creation, updation and deletion along with login authorization handeled using jwt on quiz app. Requests handeled using Postman. <br></br><br></br>
                        <a className='b' target="_blank" href="https://github.com/d1vyanshunegi/Triweb-Learning/tree/main/Projects/QuizManager">Link</a>
                    </div>
                    <div className='ticket'>
                        <h2 className='head'>Calci-Vanilla JS project</h2>

                        A simple calculator made using HTML5, CSS3, and vanilla JavaScript!<br></br><br></br>

                        <a className='b' target="_blank" href="https://divyanshunegicalci.netlify.app/">Link</a>
                    </div>



                </div>
            </div>
        </>

    )
}

export default Projects