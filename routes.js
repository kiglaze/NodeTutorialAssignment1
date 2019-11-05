const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<p>Hi, how are you doing today?</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Assignment 1: Users</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page Not Found</title><head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports.handler = requestHandler;
