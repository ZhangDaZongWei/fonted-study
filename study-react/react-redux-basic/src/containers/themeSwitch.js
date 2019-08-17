//  themeSwitch pure component
import {connect} from 'react-redux';
import ThemeSwitch from '../components/themeSwitch'

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeThemeColor: (color) => {
      dispatch({type: 'CHANGE_COLOR',themeColor: color})
    }
  }
}

export default connect(null,mapDispatchToProps)(ThemeSwitch)
