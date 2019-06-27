export const createPost = (post) => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post: post }
  })
);

export const deletePost = (postId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
);

export const fetchPost = (postId) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
);

export const updatePost = (post) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post: post }
  })
);

export const fetchPosts = () => (
  $.ajax({
    method: 'get',
    url: '/api/posts'
  })
);

