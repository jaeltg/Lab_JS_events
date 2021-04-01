document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const bookInfo = document.createElement('li');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookCategory = document.createElement('p');
  bookTitle.textContent = event.target.title.value
  bookAuthor.textContent = event.target.author.value
  bookCategory.textContent = event.target.category.value
  const list = document.querySelector('#reading-list');
  const listElement = list.appendChild(bookInfo);
  listElement.appendChild(bookTitle)
  listElement.appendChild(bookAuthor)
  listElement.appendChild(bookCategory)
  document.getElementById('new-item-form').reset();
  

})

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete All'
  form.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    const list = document.querySelector('#reading-list');
    list.innerHTML = '';
  })

})




    // // creating a new element
    // const newListItem = document.createElement('li');
    // newListItem.textContent = "Purple!!!";
    // newListItem.classList.add("purple")
    // //creating a place for it to go
    // const list = document.querySelector('ul');
    // list.appendChild(newListItem)
