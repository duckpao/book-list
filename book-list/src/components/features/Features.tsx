import "./Features.css"
import { featuresData } from "../../constants/featuresData"
import { Row, Col } from "react-bootstrap"

const Features = () => {
    return (
        <div className="features">
            <Row className="g-4">
                {featuresData.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <Col
                            key={index}
                            xs={12}
                            md={6}
                            lg={3}
                        >
                            <div className="features-item">
                                <div className="features-icon">
                                    <Icon
                                        size={38}
                                        strokeWidth={1.2}
                                        style={{ color: "#f86d72" }}
                                    />
                                </div>
                                <div className="features-content">
                                    <h3 className="features-title">{item.title}</h3>
                                    <p className="features-description">{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Features