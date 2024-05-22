import {pages} from "../App";
import {Link} from "react-router-dom";

const Header = ()=> {
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                        <span>
                          Creando
                        </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            {pages.map((value, index) => {
                                if (index === 0) return (
                                    <li className="nav-item active" key={0}>
                                        <Link className="nav-link" to={value.path}>{value.button}<span
                                            className="sr-only">(current)</span></Link>
                                    </li>
                                )
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link
                                            className="nav-link"
                                            to={value.path}
                                        >{value.button}</Link>
                                    </li>
                                )
                            })}
                            <li className="nav-item">
                                <Link className="nav-link" to="#"> <i className="fa fa-user"
                                                                     aria-hidden="true"></i> Login</Link>
                            </li>
                            <form className="form-inline">
                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
