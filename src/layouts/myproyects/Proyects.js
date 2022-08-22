import { ImageList } from './images/ImageList';
import './proyects.css';

const proyectsImages = [
    'https://i.ibb.co/bRHJdm9/Diapositiva1.png',
    'https://i.ibb.co/jJ0bnS7/Diapositiva2.png',
    'https://i.ibb.co/DQd1mY4/Diapositiva3.png',
    'https://i.ibb.co/LkCCgwv/Diapositiva4.png',
    'https://i.ibb.co/Y33KgxP/Diapositiva5.png',
    'https://i.ibb.co/JQJMqwz/Diapositiva6.png',
    'https://i.ibb.co/qNQLHsx/Diapositiva7.png',
]

export const Proyects = () => {
  return (
    <> 
        <div className='proyects_container'>

          <h1 className='proyects_tittle'>Proyectos</h1>

          <div className='proyects_container_img'>
          
          {
            proyectsImages.map((element)=>
              <div className='proyects_image'>
                <ImageList source={element}/>
              </div>
            )
          }
          
          </div>

        </div>
    
    </>
  )
}
