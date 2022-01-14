/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
    this.onClick();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.innerHTML = 
    `<table>
      <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>${this.rows[0].name}</td>
              <td>${this.rows[0].age}</td>
              <td>${this.rows[0].salary}</td>
              <td>${this.rows[0].city}</td>
              <td><button>X</button></td>
          </tr>
          <tr>
              <td>${this.rows[1].name}</td>
              <td>${this.rows[1].age}</td>
              <td>${this.rows[1].salary}</td>
              <td>${this.rows[1].city}</td>
              <td><button>X</button></td>
          </tr>
      </tbody>
    </table>`;
  }

  onClick(){
    let button = this.elem.querySelectorAll('button');
    button.forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.target.closest('tr').remove();
      })
    })
  }
}
