
export class PostServices {

  url = 'https://jsonplaceholder.typicode.com/posts'

  async getAllPosts () {
    return await fetch(this.url)
      .then (value => value.json())
  }
}
