import { WorkExperience } from "@/components/sections/work";
import { Container } from "react-bootstrap";

export const WorkPage = () => {
    return (
        <div className="work-screen">
            <section className="mt-md-5 mt-2 pt-md-5 pt-0">
                <Container>
                    <WorkExperience />
                </Container>
            </section>
        </div>
    );
};
