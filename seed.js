// Seeding script
const connectDB = require('./lib/db');
const User = require('./models/User');

const seedAdmin = async () => {
  await connectDB();
  const admin = new User({
    username: 'admin',
    password: 'securepassword',
    email: 'admin@example.com',
    role: 'admin'
  });
  await admin.save();
  console.log('Admin user created!');
};
seedAdmin();