import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = import.meta.dirname;

const config = (env) => {
  return {
    mode: "development",
    entry: env.ssr ? `${__dirname}/src/App.js` : `${__dirname}/src/index.js`,
    output: {
      filename: "index.js",
      path: `${__dirname}/dist`,
    },
    devServer: {
      static: {
        directory: `${__dirname}/dist`,
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(?:js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    plugins: [
      // index.htmlをwebpackのbuildに含める
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: `${__dirname}/template/index.html`,
      }),
    ],
  };
};

export default config;
