module.exports = {
    devServer: {
        proxy : {
            '/bank': {
                target:'http://localhost:8080',
                changeOrigin: true
            }
        }

    }
}