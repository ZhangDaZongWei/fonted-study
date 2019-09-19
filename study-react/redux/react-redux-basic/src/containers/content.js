// logic component / smart component
import {connect} from 'react-redux';
import Content from '../components/content'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Content)