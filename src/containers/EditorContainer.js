import Editor from '../components/Editor';
import { update } from '../store/Markdown';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  code: state.code
});

const mapDisptachToProps = (dispatch) => ({
  onChange: (code) => dispatch(update(code))
});

const EditorContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(Editor);



export default EditorContainer;