import Post from "./Post";

class PostsList {
    constructor(){
        this.posts = [];
    }

    getAll(){
        return this.posts;
    }

    getById(id){
        return this.posts.find((post) => post.id === id);
    }

    addPost(post){
        this.posts.push(post);
    }

    removePost(id){
        this.posts = this.posts.filter((post) => post.id !== id);
    }

    editPost(id, content, image, hashtag){
        const post = this.getById(id);

        if(post){
            post.content = content;
            post.image = image;
            post.hashtag = hashtag
        }
        return post;
    }
}

    const postList = new PostsList();
