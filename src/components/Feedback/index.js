import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {swith: false}

  chnageThePage = () => {
    this.setState(prevState => ({swith: !prevState.swith}))
  }

  renderFeedBackQ = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="main_bg">
        <div className="sub_bg">
          <h1>How you satisfied with our Coustmer support performance</h1>
          <div className="emoji_cont">
            {emojis.map(eachOne => (
              <li key={eachOne.id} className="lis">
                <button type="button" className="btn">
                  <img
                    alt="lo"
                    onClick={this.chnageThePage}
                    src={eachOne.imageUrl}
                    className="Size_img"
                  />
                </button>
                <p>{eachOne.name}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    )
  }

  thankyouButton = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }

  render() {
    const {swith} = this.state

    return <div>{swith ? this.thankyouButton() : this.renderFeedBackQ()}</div>
  }
}

export default Feedback
