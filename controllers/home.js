/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    author: 'Gunjan Doshi',
    date: '2018-10-11'
  });
};
