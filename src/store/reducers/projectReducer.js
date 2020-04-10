const initState = {
  projects: []
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};

export default projectReducer;