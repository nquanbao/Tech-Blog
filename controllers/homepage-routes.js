const router = require('express').Router();
const { Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment},{ model: User}],
    });
    const post = postData.get({ plain: true });

    res.render('singlepost', {
      ...post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.status(200).render('signup')
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/newpost', async (req, res) => {
  try {
    res.status(200).render('newpost')
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/editpost/:id', withAuth, async (req, res) => {
  try {
    const posttData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
      ],
    });

    const post = posttData.get({ plain: true });

    res.render('editpost', {
      ...post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/commentpost/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment},{ model: User}],
    });
    const post = postData.get({ plain: true });
    const userData = await User.findByPk(req.session.user_id);
    const comment = userData.get({plain: true});
    res.render('newcomment', {
      ...post,
      comment,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});


module.exports = router;