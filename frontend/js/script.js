const tbody = document.querySelector('tbody');

const fetchTasks = async () =>{
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
}

const createElement = (tag, innerText = '') =>{
    const element = document.createElement(tag);
    element.innerText = innerText;
    return element;
}

const task = {
    id: 2,
    title : 'Terminar o FrontEnd da TodoList',
    created_at : '02 de fevereiro de 2024 13:51',
    status: 'pendente'

}

const createRow = (task) => {

    const { id, title, created_at, status } = task;

    const tr = createElement('tr');

    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', created_at);
    const tdStatus = createElement('td', status);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdS);
    tbody.appendChild(tr);    

}

//createRow(task);
