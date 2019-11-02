const starter = (state = [], action) => {
  switch (action.type) {
    case 'STARTED':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default starter
