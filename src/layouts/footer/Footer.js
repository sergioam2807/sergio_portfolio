import './footer.css';

export const Footer = () => {
  return (
    <>
        <div className='footer_container'>
            <footer className='footer_section'>
                <div className='footer__socialMedia'>
                    <a href="https://www.instagram.com/s.a.a.m2807/"><img src='./icons/instagram.png' alt='instagram' className='icon'/></a>
                    <a href='https://github.com/sergioam2807'><img src='./icons/github.png' alt='instagram' className='icon icon_git'/></a>
                    <a href='www.linkedin.com/in/sergio-alvarez-medina'><img src='./icons/linkedin.png' alt='instagram' className='icon icon_linkn'/></a>
                </div>
            </footer>
        </div>
    </>
  )
}
