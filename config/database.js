if(process.env.NODE_ENV === 'production') {
    // You shouldn't leave configuration secrets in a public repository. Here is a resource on how to configure Heroku variables: https://devcenter.heroku.com/articles/config-vars
    module.exports = {mongoURI: 'mongodb://annette123:annette123@ds251197.mlab.com:51197/moodeat-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/mood-eat'}
}
