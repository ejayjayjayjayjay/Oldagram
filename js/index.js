const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")

const heartEl = document.getElementsByClassName('heart-el')
const likeEl = document.getElementsByClassName('likes-el')


function render() {
    let listPosts = ""

    for (let i = 0; i < posts.length; i++) {
        listPosts += `
        <section>
        <div class="container">
            <img class="avatar img-round" src="${posts[i].avatar}" alt="avatar"
                aria-multiline="avatar picture of a person">
            <div class="details">
                <p><span class="name">${posts[i].name}</span></p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>

        <div>
            <img class="main-img" src="${posts[i].post}" alt="image of vangogh">
        </div>

        <div class="nav-container">
            <div class="icon-nav">
                <img class="icon heart-el" src="images/icon-heart.png" alt="heart navigation">
                <img class="icon comment" src="images/icon-comment.png" alt="comment navigation">
                <img class="icon dm" src="images/icon-dm.png" alt="send navigation">
            </div>
            <div class="comment-container">
                <p id="like-el" class="likes likes-el">${posts[i].likes.toLocaleString()} likes</p>
                <p><span class="name">vincey1853 </span>${posts[i].comment}</p>
            </div>
        </div>
    </section>
    `
    }
    mainEl.innerHTML = listPosts
}

render()


heartEl[0].addEventListener("click", function () {
    let addLikes = posts[0].likes += 1
    likeEl[0].innerHTML = `${addLikes.toLocaleString()} likes`
})

heartEl[1].addEventListener("click", function () {
    let addLikes = posts[1].likes += 1
    likeEl[1].innerHTML = `${addLikes.toLocaleString()} likes`
})

heartEl[2].addEventListener("click", function () {
    let addLikes = posts[2].likes += 1
    likeEl[2].innerHTML = `${addLikes.toLocaleString()} likes`
})