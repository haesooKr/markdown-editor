const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_CODE = 'UPDATE_CODE';

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
})

export const updateCode = (code) => ({
  type: UPDATE_CODE,
  code
});

const initialState = {
  title: "",
  code: ""
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_CODE:
      return {
        ...state,
        code: action.code
      }
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    default:
      return state;
  }
}