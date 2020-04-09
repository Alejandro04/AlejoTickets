const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah', posted: 'Alejo', date: '02/02/2020' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah', posted: 'Alejo', date: '02/02/2020' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah', posted: 'Alejo', date: '02/02/2020' }
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;