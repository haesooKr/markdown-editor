import Preview from '../components/Preview';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  code: state.code
});

const PreviewContainer = connect(
  mapStateToProps,
)(Preview);



export default PreviewContainer;