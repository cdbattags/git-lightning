/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    author: '<insert-other-random-inrhythm-person-here>',
    date: '<sometime-in-zee-future>'
  });
};
