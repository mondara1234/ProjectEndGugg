import _ from "lodash";
import users from "./users";

 export const contains = ({ name, calorie }, query) => {
  const { first, last } = name;
  if (first.includes(query) || last.includes(query) || calorie.includes(query)) {
    return true;
  }

  return false;
};

export const getUsers = (limit = 20, query = "") => {
  console.log('api :', query);
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(users, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(users, user => {
        return contains(user, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export default getUsers;
