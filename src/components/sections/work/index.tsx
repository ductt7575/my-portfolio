import { useCurrentApp } from "@/components/context/app.context";
import GlowCard from "@/components/share/glow-card";
import { EXPERIENCES } from "@/helpers/data";
import blurImg from "assets/blur-23.svg";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa6";
import "./index.scss";
import { BodyModalExp } from "./components/BodyModalExp";

type TLanguage = "vi" | "en";

export const WorkExperience = () => {
    const { theme } = useCurrentApp();
    const { i18n } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<(typeof EXPERIENCES)[0] | null>(null);

    const currentLanguage = i18n.resolvedLanguage as TLanguage;

    const sortedExperiences = [...EXPERIENCES].sort((a, b) => b.id - a.id);

    const handleOpenModal = (experience: (typeof EXPERIENCES)[0], index: number) => {
        if (index === sortedExperiences.length - 1) return;
        setSelectedExperience(experience);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedExperience(null);
    };

    return (
        <div className="mb-6">
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        My <span className="brand-red">Work Experience</span>
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">Here are two companies I've worked in 2024 and 2025</h6>
                </Col>
                <Col md={{ span: 6, offset: 3 }} xs={12}>
                    <div className="d-flex flex-column">
                        {sortedExperiences.map((experience, index) => (
                            <div key={experience.id}>
                                <GlowCard identifier={`experience-${experience.id}`}>
                                    <div className="p-3 relative" onClick={() => handleOpenModal(experience, index)}>
                                        {theme === "dark" && (
                                            <img
                                                style={{ position: "absolute", bottom: 0, opacity: 0.8 }}
                                                src={blurImg}
                                                alt="Hero"
                                                width={"100%"}
                                                height={200}
                                            />
                                        )}
                                        <div className="experience-container">
                                            <div className="duration-text">
                                                <p>{experience.duration[currentLanguage]}</p>
                                            </div>
                                            <div className="details">
                                                <div className="icon">
                                                    <img src={experience.logo} alt="company-logo" width={36} />
                                                </div>
                                                <div className="info">
                                                    <p className="title">{experience.title[currentLanguage]}</p>
                                                    <p className="company">{experience.company[currentLanguage]}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="link"
                                            className="position-absolute text-decoration-none"
                                            style={{
                                                fontSize: "12px",
                                                bottom: "50%",
                                                right: 0,
                                                transform: "translateY(50%)",
                                            }}
                                        >
                                            <FaChevronRight fill={`${theme === "dark" ? "#8e44ad" : "#34495e"}`} />
                                        </Button>
                                    </div>
                                </GlowCard>
                                {index < sortedExperiences.length - 1 && (
                                    <div
                                        className="d-flex flex-column align-items-center position-relative"
                                        style={{ zIndex: 10 }}
                                    >
                                        <div
                                            className="position-absolute"
                                            style={{
                                                top: "-6px",
                                                width: "10px",
                                                height: "10px",
                                                backgroundColor: theme === "dark" ? "#8e44ad" : "#34495e",
                                                boxShadow:
                                                    theme === "dark"
                                                        ? "0 0 20px 4px rgba(122, 0, 67, 0.7)"
                                                        : "0 0 20px 4px rgba(44, 62, 80, 0.2)",
                                                borderRadius: "50%",
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                width: "4px",
                                                height: "80px",
                                                backgroundColor: theme === "dark" ? "#8e44ad" : "#34495e",
                                                boxShadow:
                                                    theme === "dark"
                                                        ? "0 0 20px 4px rgba(122, 0, 67, 0.7)"
                                                        : "0 0 20px 4px rgba(44, 62, 80, 0.2)",
                                            }}
                                        ></div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: "-6px",
                                                width: "10px",
                                                height: "10px",
                                                outlineOffset: "5px",
                                                backgroundColor: theme === "dark" ? "#8e44ad" : "#34495e",
                                                boxShadow:
                                                    theme === "dark"
                                                        ? "0 0 20px 4px rgba(122, 0, 67, 0.7)"
                                                        : "0 0 20px 4px rgba(44, 62, 80, 0.2)",
                                                borderRadius: "50%",
                                                animation:
                                                    index === sortedExperiences.length - 2
                                                        ? "blinkBorder 2s infinite alternate"
                                                        : "none",
                                            }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            {selectedExperience && (
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontSize: "18px" }}>
                            {selectedExperience?.title[currentLanguage]}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BodyModalExp experience={selectedExperience} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => window.open(selectedExperience?.url, "_blank", "noopener,noreferrer")}
                        >
                            Visit website
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};
