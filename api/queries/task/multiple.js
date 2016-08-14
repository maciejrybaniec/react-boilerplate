import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql';


import taskType from './../../schema/types/task';
import TaskModel from './../../models/Task';

export default {
  type: new GraphQLList(taskType),
  resolve: (root, params, options) => {
      return TaskModel.find(params).exec();
  }
};
