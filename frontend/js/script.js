const tbody = document.querySelector('tbody');

const fetchTasks = async () =>{
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
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
    const tdCreatedAt = createElement('td', created_at);
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
    tbody.appendChild(tr);    

}