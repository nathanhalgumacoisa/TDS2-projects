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
        showPost()
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
}

function showPost() {
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
