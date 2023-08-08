const posts = []

function savePost(){
    const title = document.getElementById("title").value
    const resume = document.getElementById("resume").value
    const category = document.getElementById("category").value
    const author = document.getElementById("author").value
    const date = document.getElementById("date").value

    if(title && category && resume && author && date){
        storePost(title, resume, category, author, date )
        cleanField()
    }else{
        alert("Preencha todos os campos!")
    }

    
}

function cleanField(){
    document.getElementById("title").value
    document.getElementById("resume").value
    document.getElementById("category").value
    document.getElementById("author").value
    document.getElementById("date").value
}


function storePost(title, category, resume, author, date){
    const post = {
        title,
        category, 
        resume,
        author,
        date
    }

    posts.push(post);

    console.log(posts)
}
