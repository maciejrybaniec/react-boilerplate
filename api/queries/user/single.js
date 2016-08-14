import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';


import userType from './../../schema/types/user';
import UserModel from './../../models/User';

export default {
  type: userType,
  args: {
    id: { type: GraphQLString }
  },
  resolve (root, params, options) {
      return UserModel.findById(params.id).exec();
  }
};
