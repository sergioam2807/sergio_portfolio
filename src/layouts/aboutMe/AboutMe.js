import './aboutMe.css';

export const AboutMe = () => {
  return (
    <>
        <div className='about_container'>
            
            <div className='about_text_container'>
                <div className='about_tittle'>
                    <h1 className='tittle'>S E R G I O</h1>
                </div>
                <div className='about_text'>
                    <h1 className='text_tittle'>A L V A R E Z</h1>
                    <h3 className='text_developer'>Developer</h3>
                    <p className='text-description'>
                    Laborum duis commodo ullamco nulla duis aliquip occaecat elit adipisicing. Aliquip dolor veniam quis duis ipsum adipisicing nostrud. In id minim culpa eiusmod sit. Pariatur tempor officia mollit ad proident ut non eiusmod nisi et. Culpa excepteur veniam ut qui. Ad anim qui non velit mollit eu.
                    </p>
                    
                </div>
                
                <div className='about_button'>
                    <button className='btn'>Dercargar CV</button>
                </div>
            </div>

            <div className='about_image_container'>
                <div className='about_image'>
                    <img className='img' src='./img/me.jpg' alt='Sergio Alvarez'/>
                </div>
            </div>

            <div className='about_text_container'>
                <div className='tittle'>
                    <h1>Mis Habilidades</h1>
                </div>
                <div className='about_text'>
                    <p>Poseo grandes capacidades para trabajar en equipo. Me encanta estar en constante aprendizaje que me permitan afrontar nuevos desafios. 
                    Actualmente mis experiencias se basan en desarrollo con diferentes tecnologias tales como;</p>
                </div>

                <div className='about_icons'>
                    <img src='./icons/skills/html-5.png' className='icon_skills' alt='html_icon'/>
                    <img src='./icons/skills/css.png' className='icon_skills' alt='css_icon'/>
                    <img src='./icons/skills/js.png' className='icon_skills' alt='js_icon'/>
                    <img src='./icons/skills/physics.png' className='icon_skills' alt='react_icon'/>

                </div>
            </div>
        </div>
    </>
  )
}
