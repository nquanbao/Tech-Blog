const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const posttData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(posttData,{
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();
