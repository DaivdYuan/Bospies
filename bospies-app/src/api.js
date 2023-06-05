const BASE_URL = "http://localhost:6001";

export const GET_ALL_POSTS_API = BASE_URL + "/posts";
export const SUBMIT_POST_API = BASE_URL + "/upload/post";
export const GET_POST_API = BASE_URL + "/post/";
export const SUBMIT_COMMENT_API = BASE_URL + "/upload/comment";
export const GET_ALL_GROUPS_API = BASE_URL + "/groups";
export const SUBMIT_NEW_GROUP_API = BASE_URL + "/upload/new-group";
export const GET_GROUP_ALL_POSTS_API = (id) => BASE_URL + "/group/" + id + "/posts";
export const GET_GROUP_POST_API = (id) => BASE_URL + "/group/" + id + "/post/";