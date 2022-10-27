import client from "../../client";

export default {
  Query: {
    userProfile: (_, { username }) =>
      client.user.findUnique({
        where: {
          username,
        },
      }),
  },
};
