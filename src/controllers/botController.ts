import axios from 'axios';
import messageQueue from '../queues/messageQueue';
import User from '../models/userModel';

export const handleMessage = async (req, res) => {
  const { chatId, message } = req.body;
  await messageQueue.add({ chatId, message });
  res.sendStatus(200);
};

export const handleCommand = async (req, res) => {
  const { chatId, command } = req.body;
  switch (command) {
    case '/start':
      await User.create({ chatId });
      break;
    case '/help':
      // 发送帮助信息
      break;
  }
  res.sendStatus(200);
};