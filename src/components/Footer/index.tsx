import "../../styles/Footer.scss"
import InstagramIcon from "../../assets/instagram.png"
import LinkedinIcon from "../../assets/logotipo-do-linkedin.png"

const Footer = () => {
    return (
        <footer className="Footer">
            <a href="https://www.instagram.com/ldebossan1/" target="_blank"><img src={InstagramIcon} alt="InstagramIcon" /></a>
            <a href="https://www.instagram.com/ldebossan1/" target="_blank"><img src={LinkedinIcon} alt="InstagramIcon" /></a>
        </footer>
    )
}

export default Footer