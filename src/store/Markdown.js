const UPDATE = 'UPDATE';

export const update = (code) => ({
  type: UPDATE,
  code
});

const initialState = {
  code: "",
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE:
      return {
        ...state,
        code: action.code
      }
    default:
      return state;
  }
}