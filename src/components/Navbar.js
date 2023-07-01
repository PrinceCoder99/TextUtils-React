import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const themeDefault = () => {
        document.body.style.backgroundColor = "#070725"
        document.getElementsByClassName('form-control')[0].style.backgroundColor = "rgb(7, 7, 37)"
        document.getElementById('textboxh1').style.color = "white"
        document.getElementsByClassName('summaryContainer')[0].style.color = "white"
    }

    const greenDark = () => {
        document.body.style.backgroundColor = "#07340c"
        document.getElementsByClassName('form-control')[0].style.backgroundColor = "#385f3c6b"
        document.getElementById('textboxh1').style.color = "#ffffff"
        document.getElementsByClassName('summaryContainer')[0].style.color = "#ffffff"
    }

    const redDark = () => {
        document.body.style.backgroundColor = "#280000"
        document.getElementsByClassName('form-control')[0].style.backgroundColor = "#330102"
        document.getElementById('textboxh1').style.color = "#08ffc9"
        document.getElementsByClassName('summaryContainer')[0].style.color = "#08ffc9"
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="btn-group mx-3 navTheme" role="group" aria-label="Basic outlined example" style={{ display: 'none', height: "30px" }}>
                        <button type="button" className="btn btn-primary" onClick={themeDefault} style={{height: "30px", width: "30px"}}> </button>
                        <button type="button" className="btn btn-success" onClick={greenDark} style={{height: "30px", width: "30px"}}> </button>
                        <button type="button" className="btn btn-danger" onClick={redDark} style={{height: "30px", width: "30px"}}> </button>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id='flexSwitchCheckDefault' />
                        <label className='for-check-label' htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set title here"
}