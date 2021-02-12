module.exports = {
    devServer: {
        proxy: {
            '/public': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }, '/bank': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }

    }
}