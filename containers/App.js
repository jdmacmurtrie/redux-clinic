import React from 'react';
// import { connect } from 'react-redux';
// import { bloat, shrink } from '../actions/sizeAdjust';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normal: true,
      large: false
    };
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.bloat = this.bloat.bind(this)
    this.shrink = this.shrink.bind(this)
  }

  handleSizeChange() {
    if(this.state.normal) {
      this.bloat()
    } else {
      this.shrink()
    }
  }

  bloat() {
    this.setState({ normal: false, large: true })
  }

  shrink() {
    this.setState({ normal: true, large: false })
  }
  render() {
    let size
    if (this.state.normal) {
      size = "normal"
    } else {
      size = "bloated"
    }
    
    return (
      <div className="goodStuff" onClick={this.handleSizeChange}>
        <div className={size}>
          Click Me!
        </div>
      </div>
    );
  }
}

export default App










// const App = props => {
//   let handleSizeChange = () => {
//     if(props.size == 'normal') {
//       props.bloat("bloated")
//     } else {
//       props.shrink("normal")
//     }
//   }

//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     bloat: () => dispatch(bloat()),
//     shrink: () => dispatch(shrink())
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     size: state.size
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
