export class Table {
  constructor(containerID, tableId, weekDay, date) {
    this.containerID = containerID;
    this.tableId = tableId;
    this.weekDay = weekDay;
    this.date = date
    this.data = this.load();

    this.element = this.render();
  }

  load () {
    const saved = localStorage.getItem(`table_${this.tableId}`);
    return saved ? JSON.parse(saved) : Array(8).fill().map(() => ['', '']);
  }

  save() {
    const tbody = this.element.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');

    const data = [];

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const time = cells[0] ? cells[0].textContent : '';
      const value = cells[1] ? cells[1].textContent : '';

      data.push([time, value])
    })

    localStorage.setItem(`table_${this.tableId}`, JSON.stringify(data))
  }
  
  // рендер полноценной таблицы
  render () {
    const tableContainer = document.createElement('div')
    tableContainer.classList.add('table-container')
    tableContainer.setAttribute('containerId', this.containerID)
    
    const header = document.createElement('div')
    header.classList.add('date-container')
    header.innerHTML = `
          <p class='day-week'>${this.weekDay}</p>
          <p class='date'>${this.date}</p>
        `

    const table = this.createTable()

    const addBtn = document.createElement('div');
    addBtn.setAttribute('add-line', '')
    addBtn.textContent = '+';
    
    addBtn.addEventListener('click', () => this.addLine());
    table.addEventListener('dblclick', (e) => this.editRow(e.target))
    tableContainer.append(header, table, addBtn)

    return tableContainer
  }

  // создание таблицы, где есть только 2 столбика и 8 строк
  createTable() {
    const table = document.createElement('table');
    table.classList.add('simple-table');
    table.setAttribute('id', this.tableId);
    
    const tbody = document.createElement('tbody');
    tbody.innerHTML = this.rowsTable();
    table.appendChild(tbody);

    return table;
  }

  // создание строчек в таблице, количество берем с лок.хранилища
  rowsTable() {
    return this.data.map((row, index) => {
      const time = row[0] || '';
      const value = row[1] || '';
      
      return `
        <tr data-row-id="${index}" class="table-row">
          <td time class="time-cell">${time}</td>
          <td data>${value}</td>
        </tr>
      `;
    }).join('');
  }

  addLine() {
    const tbody = this.element.querySelector('tbody');
    const rowCount = tbody.querySelectorAll('tr').length;

    const tr = document.createElement('tr');
    tr.setAttribute('data-row-id', rowCount);
    tr.classList.add('table-row');
    tr.innerHTML = `
      <td time class="time-cell"></td>
      <td data></td>
    `;
    
    tbody.appendChild(tr);

    this.save();
  }

  deleteInput () {
    const inputs = this.element.querySelectorAll('td input');
    inputs.forEach(input => {
      const tr = input.closest('tr')
      input.remove()
      tr.classList.remove('focus-tr')
    });
  }

  editRow(item) {
    if (!(item.tagName === 'INPUT')) {
      this.deleteInput()
      const currentRows = item.closest('tr')
      currentRows.classList.add('focus-tr')
      const td = currentRows.querySelectorAll('td')
      td.forEach((t) => {
        const input = document.createElement('input');
        input.value = td.textContent || '';
        t.appendChild(input);
      })
    } else {
      const data = []
      const inputs = this.element.querySelectorAll('input')
      inputs.forEach((input) => {
        const td = input.closest('td')
        td.textContent = input.value || '';
        data.push(input.value || '')
      })
      this.deleteInput();
      const focusedRow = this.element.querySelector('.focus-tr');
      if (focusedRow) {
        focusedRow.classList.remove('focus-tr');
      }
    }
    this.save()
  }

}