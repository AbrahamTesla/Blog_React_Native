import React, { useReducer } from "react";
import { DrawerActions } from "react-navigation";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  // const addBlogPosts = () => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     { title: `Blog Post #${blogPosts.length + 1}` }
  //   ]);
  // };

  const addBlogPosts = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
