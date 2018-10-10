/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    author: 'Christian',
    company: 'InRhythm',
    date: '2018-10-10'
  });
};
