const initState = {}
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
return state

}

export default authReducer;