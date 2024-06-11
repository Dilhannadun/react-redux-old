import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types";
import axios from "axios";

// export const fetchPosts = () => {
//   return {
//     type: FETCH_BUTTON_CLICKED,
//     payload: [
//       {
//         userId: 1,
//         id: 1,
//         title:
//           "sad kjfd sjldkfjl ahsldhf lahljksdlkfjhjkhjkha djhfjhajdskjflhkj ahsdjkfhakjl sdhfkjahsdkjfahsdkjf hkjh",
//         body: "aaaaaaaaaasjdlka akjsdlkjalksjd kajkljlkjasddk kajsldkjah8uwiejradkf kjdkfja;skldjflkj",
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: "sdfadsfs asdfasdf asdf",
//         body: "fdsfaasfasd fadfasd fadsf asdf asdf ",
//       },
//       {
//         userId: 1,
//         id: 3,
//         title: "asdfasdf sadf asdfsdfwafw fdsadfadsf  fdsafadsf",
//         body: "fgaf dfsdfa sdf adf ",
//       },
//       {
//         userId: 1,
//         id: 4,
//         title:
//           "sad kjfd sjldkfjl ahsldhf lahljksdlkfjhjkhjkha djhfjhajdskjflhkj ahsdjkfhakjl sdhfkjahsdkjfahsdkjf hkjh",
//         body: "aaaaaaaaaasjdlka akjsdlkjalksjd kajkljlkjasddk kajsldkjah8uwiejradkf kjdkfja;skldjflkj",
//       },
//     ],
//   };
// };

export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => {
      dispatch({
        type: FETCH_BUTTON_CLICKED,
        payload: res.data,
      });
    });
};

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};
