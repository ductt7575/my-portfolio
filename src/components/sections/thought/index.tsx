import { Col, Row } from "react-bootstrap";
export const MyThoughts = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        My <span className="brand-red">Thoughts</span>
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">Here is a place where I share my thought.</h6>
                    <h6 className="text-center mb-md-5 mb-2">It'll be coming soon...</h6>
                </Col>
            </Row>
        </>
    );
};
