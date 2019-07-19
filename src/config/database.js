module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'maps',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
