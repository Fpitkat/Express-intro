const express = require('express')
const app = express()

// app.use((req, res) => {
//   console.log('WE GOT A NEW REQUEST')
//   res.send('Hello, we got your request')
// })

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

// this defines a pattern for the route requested
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params
  res.send(`<h1>Browsing the ID: ${postId} from ${subreddit}...</h1>`)
})
// ////////////////////////////////////////////////////////

// Working with Query Strings
app.get('/search', (req, res) => {
  console.log(req)
  const { q } = req.query
  if (!q) {
    res.send(`<h1>Nothing found</h1>`)
  }
  res.send(`<h1>Search results for ${q} reddit</h1>`)
})

app.get('/cats', (req, res) => {
  res.send('<h1>Meow</h1>')
})

app.get('/dogs', (req, res) => {
  res.send('<h1>Woof</h1>')
})

// if nothing is found use this route
app.get('*', (req, res) => {
  res.send('<h1>not found</h1>')
})

app.listen(3000)
