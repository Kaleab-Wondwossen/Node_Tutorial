//ES module exports

const posts = [
    {id: 1, title: 'Post 1', content: 'Content 1'},
    {id: 2, title: 'Post 2', content: 'Content 2'},
    {id: 3, title: 'Post 3', content: 'Content 3'},
];

//export const getPosts = () => posts;

//------ OR ------
const getPosts = () => posts;

export const getPostsLength = () => posts.length;

// export {
//     getPosts,
// }

//default export 
export default getPosts;