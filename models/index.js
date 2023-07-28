const User = require('./User');
const Post = require('./Post');
const Dashboard = require('./Dashboard');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Dashboard.hasMany(Post, {
  foreignKey: 'dashboard_id',
  onDelete: 'CASCADE'
});
User.hasOne(Dashboard, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Dashboard };
