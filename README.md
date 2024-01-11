## My-Articles

This is a template repository crated for the purpose of showcasing your articles from a pretty website, running away from those boring pages we are used to see.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/igorfelipeduca/my-articles)

## Customizing your website

First of all, start deploying your own project with Vercel. Once you have your project deployed, you can start setting up some environment variables to customize the website with your [Dev.to](https://dev.to) articles.

Go to the `next.config.js` file and change the property `DEVTO_USERNAME` from `yelldutz` to your own username. This will change the website and generate your own articles.

```js nextconfig.js
env: {
    DEVTO_USERNAME: "<your-username>",
  },
```
