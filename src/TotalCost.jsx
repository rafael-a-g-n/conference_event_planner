import "./TotalCost.css";
import PropTypes from "prop-types";

const TotalCost = ({
  totalCosts = { venue: 0, av: 0, meals: 0 },
  ItemsDisplay = () => null,
}) => {
  const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;
  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <div className="preheading">
            <h3>Total cost for the event</h3>
          </div>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${total_amount}
          </h2>
          <div className="render_items">
            <ItemsDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

TotalCost.propTypes = {
  totalCosts: PropTypes.shape({
    venue: PropTypes.number.isRequired,
    av: PropTypes.number.isRequired,
    meals: PropTypes.number.isRequired,
  }).isRequired,
  ItemsDisplay: PropTypes.elementType.isRequired,
};

export default TotalCost;
