const users = [
  { id: 1, name: 'Manish' },
  { id: 2, name: 'Manoj' },
  { id: 3, name: 'Nikhil' },
  { id: 4, name: 'Rahul' },
];

const posts = [
  { id: 1, title: 'Post 1', body: 'This is post 1', userId: 1 },
  { id: 2, title: 'Post 2', body: 'This is post 2', userId: 2 },
  { id: 3, title: 'Post 3', body: 'This is post 3', userId: 3 },
  { id: 4, title: 'Post 4', body: 'This is post 4', userId: 4 },
];
export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  return users.find((user) => user.id === id);
};

// TimeStamp => 02:35:00
