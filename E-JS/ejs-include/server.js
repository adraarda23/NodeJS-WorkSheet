const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    const posts = [
        { id: 1, title: 'Blog Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Blog Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ];
    res.render('index', { posts });
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const posts = [
        { id: '1', title: 'Blog Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: '2', title: 'Blog Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ];

    const post = posts.find(post => post.id === postId);

    if (!post) {
        res.status(404).send('Post not found');
        return;
    }

    res.render('post', { post });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
