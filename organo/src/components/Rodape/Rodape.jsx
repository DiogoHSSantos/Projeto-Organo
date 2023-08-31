

import './rodape.css'
import instagramImage from '../../assets/ig.png'
import logo from '../../assets/logo.png'

export const Rodape = () => {

    const target = '_blank'

    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/diogoo_h._dev/" target={target}>
                        <img src={instagramImage} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img  className='logo' src={logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Diogo.
            </p>
        </section>
    </footer>)
}
