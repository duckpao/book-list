import "./Selling.css"
import { Star, ShoppingCart, Heart } from 'lucide-react'

interface SellingCardProps {
    imageUrl: string
    title: string
    author: string
    rating: number
    price: number
}

const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={18} fill={index < rating ? "#f5b50a" : "none"} stroke="#f5b50a" />
    ))
}

const SellingCard = ({
    imageUrl,
    title,
    author,
    rating,
    price
}: SellingCardProps) => {
    return (
        <>

            <div className="selling-card">
                <div className="selling-card__image">
                    <img src={imageUrl} alt={title} />
                    <div className="selling-action">
                        <div className="selling-action-item">
                            <ShoppingCart />
                        </div>
                        <div className="selling-action-item">
                            <Heart />
                        </div>
                    </div>
                </div>
                <div className="selling-card__content">
                    <h4 className="selling-card__title">
                        {title}
                    </h4>

                    <div className="selling-card__meta">

                        <span className="selling-card__author">
                            {author}
                        </span>
                        <span className="selling-card__rating">
                            {renderStars(rating)}
                        </span>

                    </div>
                    <p className="selling-card__price">
                        ${price}
                    </p>
                </div>
            </div>
        </>

    )
}

export default SellingCard