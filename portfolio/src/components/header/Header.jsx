import React, {useState, useEffect} from "react";
import "./header.css";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
        <div className={`header ${hasScrolled ? "shadow" : ""}`}>
            <div className="nav container">
                <a href="#" className='logo'> Fernandez Magali Victoria</a>

                <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">Sobre mi</a></li>
                    <li><a href="#services" className="nav-link">Sevicios</a></li>
                    <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                    <li><a href="#contact" className="nav-link">Contacto</a></li>
                </div>
                {/*Menu icon */}
                <div className={`menu-icon ${isMenuOpen ? "move" : ""}`}
                    onClick={toggleMenu}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>
        </div>
    </>)
}

export default Header;