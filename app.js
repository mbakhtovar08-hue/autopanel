const content = document.querySelector('#content');
const title = document.querySelector('#title');
const sidebar = document.querySelector('#sidebar');

const orders = [
  ['#1001','demo_user','Подписчики','1 000','490 ₽','В обработке'],
  ['#1002','client_21','Просмотры','10 000','320 ₽','Выполнен'],
  ['#1003','user_77','Лайки','500','210 ₽','Новый'],
  ['#1004','alex_demo','Подписчики','2 000','850 ₽','Выполнен'],
  ['#1005','test_user','Просмотры','5 000','180 ₽','Ошибка']
];

function badge(status) {
  let cls = 'warn';

  if (status === 'Выполнен') cls = 'ok';
  if (status === 'Ошибка') cls = 'err';

  return `<span class="badge ${cls}">${status}</span>`;
}

function ordersTable() {
  return `
    <div class="tablewrap">
      <div class="table-head">
        <h2>Последние заказы</h2>
        <button class="primary" onclick="createOrder()">+ Создать</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Клиент</th>
            <th>Услуга</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Статус</th>
          </tr>
        </thead>

        <tbody>
          ${orders.map(order => `
            <tr>
              <td>${order[0]}</td>
              <td>${order[1]}</td>
              <td>${order[2]}</td>
              <td>${order[3]}</td>
              <td>${order[4]}</td>
              <td>${badge(order[5])}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function dashboard() {
  title.textContent = 'Dashboard';

  content.innerHTML = `
    <div class="stats">

      <div class="card">
        <small>Заказы</small>
        <div class="value">1 248</div>
        <div class="trend">+12%</div>
      </div>

      <div class="card">
        <small>Новые</small>
        <div class="value">37</div>
        <div class="trend">+8%</div>
      </div>

      <div class="card">
        <small>В обработке</small>
        <div class="value">82</div>
        <div class="trend">+4%</div>
      </div>

      <div class="card">
        <small>Выполнено</small>
        <div class="value">1 104</div>
        <div class="trend">+15%</div>
      </div>

      <div class="card">
        <small>Выручка</small>
        <div class="value">284 560 ₽</div>
        <div class="trend">+11%</div>
      </div>

      <div class="card">
        <small>Баланс</small>
        <div class="value">12 450 ₽</div>
        <div class="trend">+2%</div>
      </div>

    </div>

    <div class="grid">

      <div class="section">
        <h2>Заказы за период</h2>

        <div class="chart">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>

      <div class="section">
        <h2>Состояние системы</h2>

        <div class="list">
          <div class="row">
            API ${badge('Выполнен')}
          </div>

          <div class="row">
            Автоматизация ${badge('В обработке')}
          </div>

          <div class="row">
            Синхронизация ${badge('Выполнен')}
          </div>

          <div class="row">
            Ошибки <span class="badge err">3</span>
          </div>
        </div>
      </div>

    </div>

    ${ordersTable()}
  `;
}

function showOrders() {
  title.textContent = 'Заказы';

  content.innerHTML = `
    <div class="toolbar">

      <input
        class="input"
        placeholder="Поиск заказа..."
      >

      <select class="select">
        <option>Все статусы</option>
        <option>Новый</option>
        <option>В обработке</option>
        <option>Выполнен</option>
        <option>Ошибка</option>
      </select>

      <button class="primary" onclick="createOrder()">
        + Создать заказ
      </button>

    </div>

    ${ordersTable()}
  `;
}

function showCustomers() {
  title.textContent = 'Клиенты';

  content.innerHTML = `
    <div class="tablewrap">

      <h2>Клиенты</h2>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Заказы</th>
            <th>Потрачено</th>
            <th>Статус</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>demo_user</td>
            <td>24</td>
            <td>8 450 ₽</td>
            <td>${badge('Выполнен')}</td>
          </tr>

          <tr>
            <td>client_21</td>
            <td>11</td>
            <td>3 120 ₽</td>
            <td>${badge('Выполнен')}</td>
          </tr>
        </tbody>
      </table>

    </div>
  `;
}

function showServices() {
  title.textContent = 'Услуги';

  content.innerHTML = `
    <div class="tablewrap">

      <h2>Услуги</h2>

      <table>
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Категория</th>
            <th>Цена</th>
            <th>Минимум</th>
            <th>Максимум</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Подписчики</td>
            <td>Social</td>
            <td>490 ₽</td>
            <td>100</td>
            <td>10 000</td>
          </tr>

          <tr>
            <td>Просмотры</td>
            <td>Video</td>
            <td>320 ₽</td>
            <td>1 000</td>
            <td>100 000</td>
          </tr>

          <tr>
            <td>Лайки</td>
            <td>Social</td>
            <td>210 ₽</td>
            <td>100</td>
            <td>10 000</td>
          </tr>
        </tbody>
      </table>

    </div>
  `;
}

function showBalance() {
  title.textContent = 'Баланс';

  content.innerHTML = `
    <div class="stats">

      <div class="card">
        <small>Текущий баланс</small>
        <div class="value">12 450 ₽</div>
      </div>

      <div class="card">
        <small>Пополнения</small>
        <div class="value">320 000 ₽</div>
      </div>

      <div class="card">
        <small>Потрачено</small>
        <div class="value">307 550 ₽</div>
      </div>

    </div>
  `;
}

function showAutomation() {
  title.textContent = 'Автоматизация';

  content.innerHTML = `
    <div class="stats">

      <div class="card">
        <small>Статус</small>
        <div class="value">CONNECTED</div>
      </div>

      <div class="card">
        <small>Активные задачи</small>
        <div class="value">14</div>
      </div>

      <div class="card">
        <small>Ошибки</small>
        <div class="value">3</div>
      </div>

    </div>

    <div class="card actions">

      <button class="primary">
        Test Connection
      </button>

      <button class="secondary">
        Synchronize
      </button>

      <button class="secondary">
        Start
      </button>

      <button class="secondary">
        Stop
      </button>

    </div>
  `;
}

function showSettings() {
  title.textContent = 'Настройки';

  content.innerHTML = `
    <div class="grid">

      <div class="card">
        <h2>Профиль</h2>
        <p>Администратор</p>
      </div>

      <div class="card">
        <h2>Безопасность</h2>
        <p>Настройки входа</p>
      </div>

      <div class="card">
        <h2>API</h2>
        <p>Демо-конфигурация</p>
      </div>

    </div>
  `;
}

function createOrder() {
  alert('Форма создания заказа будет добавлена следующим этапом.');
}

function openPage(page) {

  if (page === 'dashboard') {
    dashboard();
  }

  if (page === 'orders') {
    showOrders();
  }

  if (page === 'customers') {
    showCustomers();
  }

  if (page === 'services') {
    showServices();
  }

  if (page === 'balance') {
    showBalance();
  }

  if (page === 'automation') {
    showAutomation();
  }

  if (page === 'settings') {
    showSettings();
  }

  if (sidebar) {
    sidebar.classList.remove('open');
  }
}

document.querySelectorAll('.sidebar button').forEach(button => {

  button.addEventListener('click', () => {

    const page = button.dataset.page || button.dataset.p;

    if (page) {
      openPage(page);
    }

  });

});

const menu = document.querySelector('#menu');

if (menu && sidebar) {

  menu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

}

dashboard();
