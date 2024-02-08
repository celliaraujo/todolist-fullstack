const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

const fetchTasks = async () =>{
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
}

const addTask = async (event) =>{
    event.preventDefault();

   // alert('teste');

    const task = { title: inputTask.value };

    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });

    loadTasks();
}

const deleteTask = async () =>{
    
}

const formatDate = (dateUTC) =>{
    const options = { dateStyle: 'long', timeStyle: 'short'}
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}



const createSelect = (value) =>{
    const options = `
        <option value="pendente">pendente</option>
        <option value="em-andamento">em andamento</option>
        <option value="concluida">concluída</option>
    `;
    const select = createElement('select', '', options);
    select.value = value;
    return select;

}

const createElement = (tag, innerText = '', innerHTML = '') =>{
    const element = document.createElement(tag);

    if(innerText){
        element.innerText = innerText;
    }
    if(innerHTML){
        element.innerHTML = innerHTML;
    }
    
    return element;
}

const createRow = (task) => {

    const { id, title, created_at, status } = task;

    const tr = createElement('tr');

    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', formatDate(created_at));
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const delButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');
    
    const select = createSelect(status);
    
    editButton.classList.add('btn-action');
    delButton.classList.add('btn-action');
    
    tdActions.appendChild(editButton);
    tdActions.appendChild(delButton);
    tdStatus.appendChild(select);
    tr.appendChild(tdTitle);

    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);
    
    
    return tr;

}

const loadTasks = async () =>{
    const tasks = await fetchTasks();

    tbody.innerHTML = '';

    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
        
    });

}

addForm.addEventListener('submit', addTask);

loadTasks();