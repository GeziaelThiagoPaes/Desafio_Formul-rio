let submit = document.getElementById('submit');
const firebaseConfig = {
    apiKey: "AIzaSyDo1W3_9ps3t1hcXPI0vjKbq_lUitrcbbM",
    authDomain: "formulario-9b302.firebaseapp.com",
    databaseURL: "https://formulario-9b302-default-rtdb.firebaseio.com",
    projectId: "formulario-9b302",
    storageBucket: "formulario-9b302.appspot.com",
    messagingSenderId: "222265617301",
    appId: "1:222265617301:web:2d474b3268c9041152249c"
};

//inicializar o firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//variavel para acessar os dados no bd

const db = firestore.collection("form");

// criar o evento listener para acessar o form (html)

submit.addEventListener('click', (e) => {
    e.preventDefault();

    //pegar os valores do formulário html (id)

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('number').value;
    let dropdown = document.getElementById('dropdown').value;
    let sim = document.getElementById('sim').value;
    let nao = document.getElementById('nao').value;
    let talvez = document.getElementById('talvez').value;
    let web_novo = document.getElementById('design_responsivo_web_novo').value;
    let web_antigo = document.getElementById('Design_responsivo_web_legado').value;
    let algoritimos = document.getElementById('Algoritmos_estruturas_dados_JavaScript').value;
    let react = document.getElementById('react').value;
    let dados = document.getElementById('dados').value;
    let bd = document.getElementById('BD').value;
    let comentario = document.getElementById('text').value;
 
   
    


    //salvar o form no banco de dados

    db.doc().set({
        Nome: name,
        Email: email,
        Idade: age,
        Função: dropdown,
        Recomenda: sim,
        Recomenda: nao,
        Recomenda: talvez,
        Curso: web_novo,
        Curso:web_antigo,
        Curso:algoritimos,
        Curso: react,
        Curso: dados,
        Curso: bd,
        Comentario: comentario

    }).then(() => {
        console.log("Data Saved");
       alert('Formulário enviado com sucesso!',location.reload());

    }).catch((error) => {
        console.log(error);
    })
})