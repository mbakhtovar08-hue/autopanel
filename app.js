const content = document.getElementById("content");
const title = document.getElementById("title");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");

let orders = [
  {
    id: 1001,
    client: "demo_user",
    service: "Подписчики",
    quantity: 1000,
    price: 490,
    status: "В обработке"
  },
  {
    id: 1000,
    client: "user123",
    service: "Просмотры",
    quantity: 10000,
    price: 250,
    status: "Выполнен"
  },
  {
    id: 999,
    client: "client01",
    service: "Лайки",
    quantity: 500,
    price: 175,
    status: "В обработке"
  }
];


/* DASHBOARD */

function showDashboard() {

  title.textContent = "Dashboard";

  content.innerHTML = `
    <div class="stats">

      <div class="card">
        <small>Заказы</small>
        <div class="value">${orders.length}</div>
      </div>

      <div class="card">
        <small>Клиенты</small>
        <div class="value">326</div>
      </div>

      <div class="card">
        <small>Доход</small>
        <div class="value">84 520 ₽</div>
      </div>

      <div class="card">
        <small>Выполнено</small>
        <div class="value">
          ${orders.filter(order => order.status === "Выполнен").length}
        </div>
      </div>

    </div>

    <div class="section">

      <h2>Последняя активность</h2>

      <p>
        AutoPanel готов к работе.
      </p>

    </div>
  `;
}


/* ЗАКАЗЫ */

function showOrders() {

  title.textContent = "Заказы";

  content.innerHTML = `

    <div class="toolbar">

      <button class="primary" id="createOrderButton">
        + Создать заказ
      </button>

    </div>

    <div class="tablewrap">

      <h2>Последние заказы</h2>

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

              <td>#${order.id}</td>

              <td>${order.client}</td>

              <td>${order.service}</td>

              <td>${order.quantity}</td>

              <td>${order.price} ₽</td>

              <td>

                <span class="badge ${
                  order.status === "Выполнен"
                    ? "ok"
                    : "warn"
                }">

                  ${order.status}

                </span>

              </td>

            </tr>

          `).join("")}

        </tbody>

      </table>

    </div>
  `;


  document
    .getElementById("createOrderButton")
    .onclick = showCreateOrder;
}


/* СОЗДАНИЕ ЗАКАЗА */

function showCreateOrder() {

  title.textContent = "Создать заказ";

  content.innerHTML = `

    <div class="section">

      <h2>Новый заказ</h2>

      <select class="select" id="service">

        <option value="Подписчики">
          Подписчики
        </option>

        <option value="Просмотры">
          Просмотры
        </option>

        <option value="Лайки">
          Лайки
        </option>

      </select>

      <input
        class="input"
        id="link"
        type="url"
        placeholder="Ссылка"
      >

      <input
        class="input"
        id="quantity"
        type="number"
        min="1"
        placeholder="Количество"
      >

      <p>
        Стоимость:
        <strong id="price">0 ₽</strong>
      </p>

      <button class="primary" id="submitOrder">
        Создать заказ
      </button>

      <button class="secondary" id="cancelOrder">
        Отмена
      </button>

    </div>
  `;


  const service = document.getElementById("service");
  const quantity = document.getElementById("quantity");
  const price = document.getElementById("price");


  function calculatePrice() {

    const count = Number(quantity.value) || 0;

    let rate = 0.49;

    if (service.value === "Просмотры") {
      rate = 0.025;
    }

    if (service.value === "Лайки") {
      rate = 0.35;
    }

    const total = Math.round(count * rate);

    price.textContent = total + " ₽";
  }


  service.onchange = calculatePrice;

  quantity.oninput = calculatePrice;


  document
    .getElementById("cancelOrder")
    .onclick = showOrders;


  document
    .getElementById("submitOrder")
    .onclick = function () {

      const link =
        document.getElementById("link").value.trim();

      const count =
        Number(quantity.value);

      if (!link) {

        alert("Введите ссылку");

        return;
      }


      if (!count || count < 1) {

        alert("Введите количество");

        return;
      }


      let rate = 0.49;

      if (service.value === "Просмотры") {
        rate = 0.025;
      }

      if (service.value === "Лайки") {
        rate = 0.35;
      }


      const newOrder = {

        id: orders.length > 0
          ? orders[0].id + 1
          : 1001,

        client: "admin",

        service: service.value,

        quantity: count,

        price: Math.round(count * rate),

        status: "В обработке"

      };


      orders.unshift(newOrder);


      alert("Заказ создан!");

      showOrders();

    };
}


/* КЛИЕНТЫ */

function showCustomers() {

  title.textContent = "Клиенты";

  content.innerHTML = `

    <div class="section">

      <h2>Клиенты</h2>

      <p>
        Всего клиентов: <strong>326</strong>
      </p>

      <div class="list">

        <div class="row">
          demo_user
          <b>Активен</b>
        </div>

        <div class="row">
          user123
          <b>Активен</b>
        </div>

        <div class="row">
          client01
          <b>Активен</b>
        </div>

      </div>

    </div>

  `;
}


/* УСЛУГИ */

function showServices() {

  title.textContent = "Услуги";

  content.innerHTML = `

    <div class="section">

      <h2>Услуги</h2>

      <div class="list">

        <div class="row">
          Подписчики
          <b>0.49 ₽ / шт.</b>
        </div>

        <div class="row">
          Просмотры
          <b>0.025 ₽ / шт.</b>
        </div>

        <div class="row">
          Лайки
          <b>0.35 ₽ / шт.</b>
        </div>

      </div>

    </div>

  `;
}


/* АВТОМАТИЗАЦИЯ */

function showAutomation() {

  title.textContent = "Автоматизация";

  content.innerHTML = `

    <div class="section">

      <h2>Автоматизация</h2>

      <p>
        Управление автоматическими процессами.
      </p>

      <button class="primary">
        Автоматизация включена
      </button>

    </div>

  `;
}


/* БАЛАНС */

function showBalance() {

  title.textContent = "Баланс";

  content.innerHTML = `

    <div class="section">

      <h2>Текущий баланс</h2>

      <div class="value">
        12 450 ₽
      </div>

      <br>

      <button class="primary">
        Пополнить баланс
      </button>

    </div>

  `;
}


/* АКТИВНОСТЬ */

function showActivity() {

  title.textContent = "Активность";

  content.innerHTML = `

    <div class="section">

      <h2>Последняя активность</h2>

      <div class="list">

        <div class="row">
          Создан заказ #1001
          <small>Сегодня</small>
        </div>

        <div class="row">
          Выполнен заказ #1000
          <small>Сегодня</small>
        </div>

        <div class="row">
          Добавлен клиент
          <small>Сегодня</small>
        </div>

      </div>

    </div>

  `;
}


/* НАСТРОЙКИ */

function showSettings() {

  title.textContent = "Настройки";

  content.innerHTML = `

    <div class="section">

      <h2>Настройки</h2>

      <p>
        Настройки панели AutoPanel.
      </p>

      <button class="secondary">
        Сохранить настройки
      </button>

    </div>

  `;
}


/* ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ */

function showPage(page) {

  if (page === "dashboard") {
    showDashboard();
  }

  else if (page === "orders") {
    showOrders();
  }

  else if (page === "customers") {
    showCustomers();
  }

  else if (page === "services") {
    showServices();
  }

  else if (page === "automation") {
    showAutomation();
  }

  else if (page === "balance") {
    showBalance();
  }

  else if (page === "activity") {
    showActivity();
  }

  else if (page === "settings") {
    showSettings();
  }
}


/* БОКОВОЕ МЕНЮ */

document
  .querySelectorAll(".sidebar nav button")
  .forEach(function(button) {

    button.addEventListener("click", function() {

      const page =
        this.getAttribute("data-page");

      showPage(page);

      if (window.innerWidth <= 700) {

        sidebar.classList.remove("open");

      }

    });

  });


/* МОБИЛЬНОЕ МЕНЮ */

if (menu && sidebar) {

  menu.addEventListener("click", function() {

    sidebar.classList.toggle("open");

  });

}


/* СТАРТОВАЯ СТРАНИЦА */

showPage("dashboard");
