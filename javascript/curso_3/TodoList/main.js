/**s
 * 
 * @form  1-Captura el elemento (formulario)por JS
 *        2-Se le asigna un evento(submit)
 * @task  1-Captura el elemento (input) por JS
 * @textoTask 1- Captura el valor del elemento Task(input) se lo que hayamos escrito y reemplazamos su valor a vacio luego de que se termine el evento submit
 * 
 */

/* const todos = []; */
const todos = JSON.parse(localStorage.getItem('todos')) || [];
const form = document.getElementById('form');


const render = () => {
    const lista = document.getElementById('lista');
    /* lista.innerHTML = '';
    for(let i=0; i < todos.length; i++){
        lista.innerHTML += '<li>'+ todos[i] + '</li>';
    } */

    //Usando MAP para recorrer el arreglo(formas mas simpllificada)
    const listaTemplate = todos.map(t => '<li>'+ t +'</li>'); 
    //nuestra listaTemplato ahora es un arreglo por eso no se puede pasar a innerHTML por eso ponemos el metodo join que sirve para unir y concatenar. 
    lista.innerHTML = listaTemplate.join('');
    console.log(listaTemplate);

    //.splice() -> nos permite eliminar valores de un array 1valor (posición del elemento a eliminar) , 2valor(cuantos valores se eliminara)
    const elementos = document.querySelectorAll('#lista li');
    elementos.forEach ((ele, i)=> {
        ele.addEventListener('click', ()=> {
            //Porquequeremos ver los nodos? Los nodos padres tienen la capacidad de eliminar a sus hijos
            ele.parentNode.removeChild(ele);
            todos.splice(i,1); //borrando del array (indice, numero de elementos a borrar)
            console.log(todos, i);
            actulizaTodos(todos);
            render(); //llamando a la funcion para que se actualize
        });
    });
}
const actulizaTodos = todos => {
    const  todoString = JSON.stringify(todos)
    localStorage.setItem('todos', todoString);
}
render();
form.onsubmit = (e) => {
    e.preventDefault(); // con esto no se actualiza la pagina al momento de enviar la tarea actual del input
    const task = document.getElementById('task');
    const textoTask = task.value;
    task.value ='';
    todos.push(textoTask);
    /* console.log(textoTask); */   
    //Guardando en el TODOLIST
    actulizaTodos(todos);
    render();
}
