import Header from '../components/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  title: state.title,
  code: state.code
})

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;