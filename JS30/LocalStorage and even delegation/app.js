const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    // we can use the "this" so that we are targeting for the exact input, because form is in the addItems.
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    // push the data into the array
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    // will reset the input form when submitted 
    this.reset();
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i ) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join("");
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const elementIndex = el.dataset.index;
    items[elementIndex].done = !items[elementIndex].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList)
