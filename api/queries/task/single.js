import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';


import taskType from './../../schema/types/task';
import TaskModel from './../../models/Task';

export default {
  type: taskType,
  args: {
    id: { type: GraphQLString }
  },
  resolve (root, params, options) {
      return UserModel.findById(params.id).exec();
  }
};
