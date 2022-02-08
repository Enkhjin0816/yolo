import { Search, Login } from './icon';
import '../style/custom.scss';
import logo from '../yolo.png'

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '80%' }}>
                    <div class="container-fluid d-flex justify-content-center justify-content-around">
                        <div className='d-flex flex-column mt-2'>
                            <img style={{ width: '100px', height: '50px' }} src={logo} alt="" width="30" height="24" class="" />
                            <p className='text-center' style={{ fontSize: '15px' }}>Өсвөр үе, залууст ...</p>
                        </div>
                        <div className='d-flex'>
                            <a className='ps-5 text-dark fw-light nav-link'>ЭНТЕРТАЙНМЕНТ</a>
                            <a className='ps-3 link-dark fw-light nav-link'>БОЛОВСРОЛ</a>
                            <a className='text-center ps-3 link-dark fw-light nav-link'>ХУВЬ ХҮНИЙ ХӨГЖИЛ</a>
                            <a className='ps-3 link-dark fw-light nav-link'>ЯРИЛЦЛАГА</a>
                            <a className='text-center ps-3 link-dark fw-light nav-link'>СОНИН ХАЧИН</a>
                            <a className='ps-3 link-dark fw-light nav-link'>ЗӨВЛӨГӨӨ</a>
                            <a className='ps-3 link-dark fw-light nav-link'>КОМИК</a>
                            <Search color={'rgb(247, 230, 82)'}/>
                            <Login color={'rgb(63, 90, 147)'}/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;