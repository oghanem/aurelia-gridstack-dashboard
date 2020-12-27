const path = require("path");
const { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = {
  entry: {
    main: "aurelia-bootstrapper"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x))
  },
  module: {
    rules: [{
      test: /\.css$/,
      issuer: [{
        not: [{
          test: /\.html$/i
        }]
      }],
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        }
      ]
    },
    {
      test: /\.css$/,
      issuer: [{
        test: /\.html$/i
      }],
      use: [
        {
          loader: "css-loader"
        }
      ]
    },
    {
      test: /\.less$/,
      issuer: [{
        not: [{
          test: /\.html$/i
        }]
      }],
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader",
        }
      ]
    },
    {
      test: /\.less$/,
      issuer: [{
        test: /\.html$/i
      }],
      use: [
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader",
        }
      ]
    },
    {
      test: /\.(sass|scss)$/,
      issuer: [{
        not: [{
          test: /\.html$/i
        }]
      }],
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader",
        }
      ]
    },
    {
      test: /\.(sass|scss)$/,
      issuer: [{
        test: /\.html$/i
      }],
      use: [
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader",
        },
      ]
    },
    {
      test: /\.ts$/i,
      use: [
        {
          loader: "ts-loader"
        }
      ]
    },
    {
      test: /\.html$/i,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },
    {
      test: /\.(png|gif|jpg|cur)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: 'application/font-woff2'
          }
        }
      ]
    },
    {
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
      use: [
        {
          loader: "file-loader"
        }
      ]
    },
    {
      test: /(pdf\.worker|worker-loader)\.(js|ts)$/i,
      use: [
        {
          loader: 'worker-loader',
          options: {
            inline: true
          }
        }
      ]
    }
    ]
  },
  plugins: [
    new AureliaPlugin()
  ],
};
