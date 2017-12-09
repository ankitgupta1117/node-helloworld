const PATH  = require('path');

module.exports= {
        entry: './src/index.js',
        output: {
            path: PATH.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module:{
           rules:[
               {
                test:/\.js$/,
                use:[
                    { loader: 'babel-loader' }
                ]
               }
            ]
        }        
};