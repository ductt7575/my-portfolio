import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">
                        Know Who <span className="brand-red">I'M</span>
                    </h3>
                    <div>
                        <div>
                            <p> Hi Everyone, I am Trong Duc from Binh Dinh, VietNam.</p>

                            <p> I am currently employed as a Fresher Front-end Developer.</p>

                            <p>
                                I have completed Bachelor's degree in Software Engineer at University of Economics Ho
                                Chi Minh city.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Apart from being a web developer, I find joy in various activities.</p>
                        <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <li>
                                I indulge in reading books, running, swimming, going for walks, and exploring the
                                outdoors.
                            </li>
                            <li>I have a passion for learning new things, coding, and playing the guitar.</li>
                            <li>When indoors, I immerse myself in sci-fi and fantasy movies.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">
                            "If words control you that means everyone else can control you 🌥"
                        </p>
                        <p className="text-center brand-red">--My motto</p>
                    </div>
                </Col>
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie width="80%" animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12} className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3 mb-5">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div>
                            <h4 className="text-center brand-red">Education</h4>
                        </div>
                        <div>
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2021-2025</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Software Engineer</p>
                                                <p className="company">
                                                    University of Economics Ho Chi Minh City (UEH)
                                                </p>
                                                <b className="text-pink-100">GPA: 3.63</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                        <div>
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2018-2021</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Specialized students</p>
                                                <p className="company">Le Quy Don High school for Gifted students</p>
                                                <b className="text-pink-100">GPA: 3.63</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        instagram={APP_DATA.INSTAGRAM_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        github={APP_DATA.GITHUB_URL}
                        gmail={APP_DATA.GMAIL_URL}
                        linkedin={APP_DATA.LINKEDIN_URL}
                    />
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    );
};

export default About;
