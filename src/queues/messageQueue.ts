import Queue from 'bull';
import { User } from '../models/userModel';

const messageQueue = new Queue('message processing', 'redis://127.0.0.1:6379');

messageQueue.process(async (job) => {
  const { chatId, message } = job.data;
  const user = await User.findOne({ chatId });
  if (user) {
    // 处理用户消息
    console.log(`Processing message for user ${user.username}: ${message}`);
  }
});

export default messageQueue;