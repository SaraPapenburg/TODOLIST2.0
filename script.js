const form = document.querySelector('.form');

const emptyToDoList = () => {
    parentElement = document.getElementById('list');
    while (parentElement.firstChild) { parentElement.removeChild(parentElement.firstChild) };
};

const myGetDataList = () => {
    data.forEach(item => {
        const ulToDoList = document.getElementById('list');
        const liToDoListItem = document.createElement('li');

        const spanToDoListItem = document.createElement('span');
        spanToDoListItem.innerHTML = item.description;

        const deleteBttn = document.createElement('button');
        deleteBttn.setAttribute('type', 'submit');
        deleteBttn.setAttribute('class', 'delete');
        deleteBttn.setAttribute('id', item._id);
        deleteBttn.innerHTML = 'delete';

        ulToDoList.appendChild(liToDoListItem);
        liToDoListItem.appendChild(spanToDoListItem);
        liToDoListItem.appendChild(deleteBttn);

        const emptyInputField = document.getElementById('to_do_list');
        emptyInputField.value = '';
    });
};

const myDeleteDataList = () => {
    const deleteBttns = document.querySelectorAll('.delete');
    Array.from(deleteBttns).forEach(deleteBttn => {
        deleteBttn.addEventListener('click', e => {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            const deleteBttnId = deleteBttn.id;
            deleteBttn.addEventListener('click', myDeleteData(deleteBttnId));
        })
    });
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const results = Object.fromEntries(formData);
    myPostData(results);
    myGetData();
});