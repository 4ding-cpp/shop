// var fetch = require('node-fetch');

export default {
 
  async get_template(context, url) {
    const html = await this.$axios.$get(`${process.env.IMG_URL}${url}`);
    console.log(html)
    return html
  },
  
}