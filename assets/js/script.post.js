const posts = []
const postIndex = -1
function savePost(){
    const title = document.getElementById("title").value
    const resume = document.getElementById("category").value
    const category = document.getElementById("resume").value
    const author = document.getElementById("author").value
    const date = document.getElementById("date").value


    if(title && category && resume && author && date){
        if(postIndex == -1){
            storePost(title, resume, category, author, date )
        cleanField()
        showPost()
        }else{
            posts[postIndex] = {
                title,
                category,
                resume,
                author,
                date
            }
             
        }
    }else{
        alert("Preencha todos os campos!")
    }

    
}

function cleanField(){
    document.getElementById("title").value
    document.getElementById("category").value
    document.getElementById("resume").value
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
}

function showPost() {
    document.getElementById("list").classList.remove("hidden")
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
           <div class="itemPost">
             <h2>${post.title}</h2>
             <p><strong>categoria: ${post.category}</strong></p>
             <p><strong>:Resumo ${post.resume}</strong></p>
             <p><strong>Autor: ${post.author}</strong></p>
             <p><strong>Data de publicação: ${post.date}</strong></p>

             <button onclick="editPost(${index})">Editar</button>
             <button onclick="deletePost(${index})">deletar</button>
           </div>`;
    });
    document.getElementById("list").innerHTML = showContent;
}

function editPost(index){
    const post = posts[index];

    document.getElementById("title").value = post.title
    document.getElementById("category").value = post.category
    document.getElementById("resume").value = post.resume
    document.getElementById("author").value = post.author
    document.getElementById("date").value = post.date

    postIndex = index;
}

function deletePost(index){
    post.splice(index, 1);
    showPost();

    if(posts.length == 0){
        document.getElementById("list").classList.add("hidden")
    }
}
