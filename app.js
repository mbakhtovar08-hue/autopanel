const content = document.getElementById("content");
const title = document.getElementById("title");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");

function showPage(page) {
  const pages = {
    dashboard: {
      title: "Dashboard",
      html: `
        <div class="stats">
          <div class="card"><small>Заказы</small><div class="value">1 248</div></div>
          <div class="card"><small>Клиенты</small><div class="value">326</div></div>
          <div class="card"><small>Доход</small><div class="value">84 520 ₽</div></div>
          <div class="card"><small>Выполнено</small><div class="value">1 102</div></div>
        </div>

        <div class="grid">
          <div class="section">
            <h2>Статистика заказов</h2>
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
            <h2>Последняя активность</h2>
            <div class="list">
              <div class="row">Новый заказ <b>#1001</b></div>
              <div class="row">Новый клиент <b>demo_user</b></div>
              <div class="row">Заказ выполнен <b>#998</b></div>
            </div>
          </div>
        </div>
      `
    },

    orders: {
      title: "Заказы",
      html: `
        <div class="tablewrap">
          <h2>Список заказов</h2>
          <table>
            <tr>
              <th>ID</th>
              <th>Клиент</th>
              <th>Услуга</th>
              <th>Количество</th>
              <th>Статус</th>
            </tr>
            <tr>
              <td>#1001</td>
              <td>demo_user</td>
              <td>Подписчики</td>
              <td>1 000</td>
              <td><span class="badge warn">В обработке</span></td>
            </tr>
            <tr>
              <td>#1000</td>
              <td>user123</td>
              <td>Просмотры</td>
              <td>10 000</td>
              <td><span class="badge ok">Выполнен</span></td>
            </tr>
          </table>
        </div>
      `
    },

    customers: {
      title: "Клиенты",
      html: `<div class="section"><h2>Клиенты</h2><p>Здесь будут отображаться клиенты.</p></div>`
    },

    services: {
      title: "Услуги",
      html: `<div class="section"><h2>Услуги</h2><p>Управление услугами AutoPanel.</p></div>`
    },

    automation: {
      title: "Автоматизация",
      html: `<div class="section"><h2>Автоматизация</h2><p>Настройки автоматизации заказов.</p></div>`
    },

    balance: {
      title: "Баланс",
      html: `<div class="section"><h2>Баланс</h2><div class="value">12 450 ₽</div></div>`
    },

    activity: {
      title: "Активность",
      html: `<div class="section"><h2>Активность</h2><p>Последние действия системы.</p></div>`
    },

    settings: {
      title: "Настройки",
      html: `<div class="section"><h2>Настройки</h2><p>Настройки панели.</p></div>`
    }
  };

  const selected = pages[page] || pages.dashboard;

  title.textContent = selected.title;
  content.innerHTML = selected.html;
}

document.querySelectorAll(".sidebar button").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
    sidebar.classList.remove("open");
  });
});

menu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

showPage("dashboard");
