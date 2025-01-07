import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface IProps {
    instagram: string;
    facebook: string;
    github: string;
    gmail?: string;
    linkedin: string;
}
const SocialMedia = (props: IProps) => {
    const { instagram, github, gmail, linkedin, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target="_blank" className="highlight" title="Github">
                <FaGithub size={30} />
            </a>
            <a href={facebook} target="_blank" className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>
            <a href={linkedin} target="_blank" className="highlight" title="Linkedin">
                <FaLinkedinIn size={30} />
            </a>
            <a href={instagram} target="_blank" className="highlight" title="Instagram">
                <FaInstagram size={30} />
            </a>
            {gmail && (
                <a href={`mailto:${gmail}`} target="_blank" className="highlight" title="Gmail">
                    <SiGmail size={30} />
                </a>
            )}
        </div>
    );
};

export default SocialMedia;
