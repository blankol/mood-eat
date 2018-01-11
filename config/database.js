if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb://annette.annette@ds251197.mlab.com:51197/moodeat-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/mood-eat'}
}
