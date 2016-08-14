import {
  GraphQLList,
  GraphQLString
} from 'graphql';


import userType from './../../schema/types/user';
import UserModel from './../../models/User';

export default {
  type: new GraphQLList(userType),
  resolve: (root, params, options) => {
      return UserModel.find().exec();
  }
};
