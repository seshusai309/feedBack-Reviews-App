import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {startValue: 0}

  clickedBack = () => {
    const {startValue} = this.state

    if (startValue <= 0) {
      this.setState({startValue: 3})
    } else {
      this.setState(each => ({startValue: each.startValue - 1}))
    }
  }

  clickedFront = () => {
    this.setState(each => ({startValue: each.startValue + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {startValue} = this.state
    const finalValue = startValue % reviewsList.length

    return (
      <div className="container">
        <div className="sub-container">
          <button
            data-testid="leftArrow"
            className="btn"
            onClick={this.clickedBack}
            type="button"
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>

          <div className="reviews">
            <h1 className="reviewMainHead">Reviews</h1>

            <div className="review-prople">
              <img
                alt={reviewsList[finalValue].username}
                src={reviewsList[finalValue].imgUrl}
              />
              <p className="review-people-heading">
                {reviewsList[finalValue].username}
              </p>
              <p className="review-people-para1">
                {reviewsList[finalValue].companyName}
              </p>
              <p className="review-people-para1">
                {reviewsList[finalValue].description}
              </p>
            </div>
          </div>

          <button
            data-testid="rightArrow"
            className="btn"
            onClick={this.clickedFront}
            type="button"
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
