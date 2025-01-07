import { MyThoughts } from "@/components/sections/thought";
import { Container } from "react-bootstrap";

export const Thought = () => {
    return (
        <div className="work-screen">
            <section className="mt-md-5 mt-2 pt-md-5 pt-0">
                <Container>
                    <MyThoughts />
                </Container>
            </section>
        </div>
    );
};
