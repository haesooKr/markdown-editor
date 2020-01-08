import Preview from '../components/Preview';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  title: state.title,
  code: state.code
});

const PreviewContainer = connect(
  mapStateToProps,
)(Preview);



export default PreviewContainer;