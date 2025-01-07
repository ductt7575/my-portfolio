import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useCurrentApp } from "@/components/context/app.context";

interface IProps {
    imgPath: string;
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    time: string;
}

function ProjectCard(props: IProps) {
    const { theme } = useCurrentApp();

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ maxHeight: 215, height: 170 }} />

            <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center gap-3">
                    <Card.Title>{props.title}</Card.Title>
                    <div
                        className="px-2 py-1 mb-2"
                        style={{
                            borderRadius: "8px",
                            backgroundColor: "#0d1224",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "1px solid #ec4899",
                            fontSize: "12px",
                        }}
                    >
                        {props.time}
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between h-100">
                    <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

                    <div className="d-flex align-items-center gap-3">
                        <Button
                            variant={theme === "light" ? "outline-dark" : "outline-light"}
                            href={props.githubLink}
                            target="_blank"
                            className="d-flex align-items-center"
                        >
                            <BsGithub /> &nbsp; GitHub
                        </Button>

                        <Button
                            variant={theme === "light" ? "outline-dark" : "outline-light"}
                            href={props.demoLink}
                            target="_blank"
                            className="d-flex align-items-center"
                        >
                            <CgWebsite /> &nbsp;
                            {"Demo"}
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
export default ProjectCard;
