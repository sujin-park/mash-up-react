const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어를 배우자',
    body: '리덕스 미들웨어 직접 만들어보면 재밌을 것 같다.'
  },
  {
    id: 2,
    title: 'redux-thunk부터 배우자',
    body: 'redux-thunk 딱 한번밖에 안 써봤는데..'
  },
  {
    id: 3,
    title: 'redux-saga도 사용해보자',
    body: 'generator가 어려워서 어렵게 느껴지는걸까'
  }
];

export const getPosts = async () => {
  await sleep(500);

  return posts;
}

export const getPostById = async (id) => {
  await sleep(500);

  return posts.find(post => post.id === id);
}