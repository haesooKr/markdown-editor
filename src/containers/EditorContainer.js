import Editor from '../components/Editor';
import { updateCode, updateTitle } from '../store/Markdown';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  title: state.title,
  code: state.code
});

const mapDisptachToProps = (dispatch) => ({
  onChangeCode: (code) => dispatch(updateCode(code)),
  onChangeTitle: (title) => dispatch(updateTitle(title))
});

const EditorContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(Editor);



export default EditorContainer;