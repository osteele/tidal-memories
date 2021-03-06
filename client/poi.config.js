const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    define: {
        'process.env.API_SERVER_URL': JSON.stringify(
            process.env.API_SERVER_URL || 'http://127.0.0.1:5000/'
        ),
        'process.env.AUDIO_BASE_URL': JSON.stringify(process.env.AUDIO_BASE_URL)
    },
    html: {
        title: 'Dinaconfo — Dinaocon Photo Gallery'
    }
};
