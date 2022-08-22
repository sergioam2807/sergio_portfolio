import'./imageList.css';

export const ImageList = ({source}) => {
        return(
        <>
        <div className='card_container'>  
          <div className='card_container_tittle'>
            <h3 className='card_title'> Hola mundo</h3>
          </div>
          <div className='card_img_container'>
            <img src={source}  className='img_img'/>
          </div>
          <div className='card_footer'>
            <button>Hola</button>
            <div>Icono</div>
          </div>

        </div>
        </>
        )
}
