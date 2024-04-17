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


}