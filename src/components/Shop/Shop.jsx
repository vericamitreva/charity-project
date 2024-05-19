import "./shop.css"
import Item1 from './item-1.jpg'
import Item2 from './item-2.jpg'
import Item3 from './item-3.jpg'
import Item4 from './item-4.jpg'
import Item5 from './item-5.jpg'
import Item6 from './item-6.jpg'

export default function Shop(){
    return(
        <div className="shop-section">
            <div className="shop-container">
            <div className="shop-header">
                <div className="shop-header-text">
                    <h2>Shop Page</h2>
                </div>
            </div>

            <div className="shop-grid">
                <div className="item">
                    <img src={Item1} alt="" className="item-img"/>
                    <div className="details">
                        <h4 className="item-name">Dobby Kurta Set</h4>
                        <div className="prices">
                            <p className="old-price">$99.00</p>
                            <p className="new-price">$79.00</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                <img src={Item2} alt="" className="item-img"/>
                <div className="details">
                        <h4 className="item-name">Gathered Sleeve Dress	</h4>
                        <div className="prices">
                            <p className="old-price">$79.00</p>
                            <p className="new-price">$65.00</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                <img src={Item3} alt="" className="item-img" />
                <div className="details">
                        <h4 className="item-name">Linen Blue Dress</h4>
                        <div className="prices">
                            <p className="old-price">$89.00</p>
                            <p className="new-price">$72.00</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                <img src={Item4} alt="" className="item-img"/>
                <div className="details">
                        <h4 className="item-name">Linen Cotton Dress</h4>
                        <div className="prices">
                            <p className="old-price">$95.00</p>
                            <p className="new-price">$82.00</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                <img src={Item5} alt="" className="item-img"/>
                <div className="details">
                <h4 className="item-name">Men Winter Blazer</h4>
                        <div className="prices">
                            <p className="old-price">$96.00</p>
                            <p className="new-price">$79.00</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                <img src={Item6} alt="" className="item-img"/>
                <div className="details">
                        <h4 className="item-name">Sleeves And Pockets</h4>
                        <div className="prices">
                            <p className="old-price">$92.00</p>
                            <p className="new-price">$75.00</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}