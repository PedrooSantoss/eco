export default class Post{
    constructor(content, image, hashtag){
        this.id = this.gerarID()
        this.content = content;
        this.image = image;
        this.hashtag = hashtag;
    }

    gerarID(){
        return Math.floor(Math.random() * 1000);
    }
}