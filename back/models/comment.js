const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
    modelName: 'Comment', // modelname 추가
    tableName: 'comments',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 한글, 이모티콘 저장
    sequelize, // 연결를 class로 보내주기 때문에 
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const Comment = sequelize.define('Comment', {
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//   }, {
//     charset: 'utf8mb4',
//     collate: 'utf8mb4_general_ci', // 한글, 이모티콘 저장
//   });
//   Comment.associate = (db) => {
//     db.Comment.belongsTo(db.User);
//     db.Comment.belongsTo(db.Post);
//   };
//   return Comment;
// };