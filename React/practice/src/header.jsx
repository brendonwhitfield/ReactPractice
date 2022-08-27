import './header.css';
const Header = () => {
    return (
    <header>
        <nav className="navbar navbar-expand-sm">
        <a
            className="nav-brand"
            href="www.qa.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img alt="logo" src="https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/1200px-House_Targaryen.svg.png" width="100" />
        </a>
        <a className="navbar-brand">
            Some header
        </a>
        </nav>
    </header>
    );
}
export default Header; 