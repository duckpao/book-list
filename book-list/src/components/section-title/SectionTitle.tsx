import "./SectionTitle.css"
import Button from "../button/Button"

interface SectionTitleProps {
    title: string,
    content: string
}

const SectionTitle = ({ title, content }: SectionTitleProps) => {
    return (
        <div className="section-title-wrapper">
            <h3 className="section-title m-0">{title}</h3>
            <div className="section-btn">
                <Button content={content} />
            </div>
        </div>
    )
}

export default SectionTitle