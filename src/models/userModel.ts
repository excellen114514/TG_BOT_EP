import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  chatId: Number,
  username: String,
});

export default mongoose.model('User', userSchema);