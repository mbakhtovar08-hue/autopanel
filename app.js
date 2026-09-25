const content = document.getElementById("content");
const title = document.getElementById("title");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");

let orders = [
  {
    id: 1001,
    client: "demo_user",
    service: "Подписчики",
    link: "https://example.com",
    quantity: 1000,
    price: 490,
    status: "В обработке"
  },
  {
    id: 1000,
    client: "user123",
    service: "Просмотры",
    link: "https://example.com",
    quantity: 10000,
    price: 250,
    status: "Выполнен"
  }
];

function showPage(page) {

  if (page === "dashboard") {
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
            ${orders.filter(o => o.status === "Выполнен").length}
          </div>
        </div>
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
            <div class="row">
              Новый заказ
              <b>#1001</b>
            </div>

            <div class="row">
              Новый клиент
              <b>demo_user</b>
            </div>

            <div class="row">
              Заказ выполнен
              <b>#1000</b>
            </div>
          </div>
        </div>

      </div>
    `;

    return;
  }

  if (page === "orders") {
    showOrders();
    return;
  }

  if (page === "customers") {
    title.textContent = "Клиенты";

    content.innerHTML = `
      <div class="section">
        <h2>Клиенты</h2>
        <p>Здесь будут отображаться клиенты.</p>
      </div>
    `;

    return;
  }

  if (page === "services") {
    title.textContent = "Услуги";

    content.innerHTML = `
      <div class="section">
        <h2>Услуги</h2>
        <p>Подписчики, просмотры, лайки и другие услуги.</p>
      </div>
    `;

    return;
  }

  if (page === "automation") {
    title.textContent = "Автоматизация";

    content.innerHTML = `
      <div class="section">
        <h2>Автоматизация</h2>
        <p>Настройки автоматизации заказов.</p>
      </div>
    `;

    return;
  }

  if (page === "balance") {
    title.textContent = "Баланс";

    content.innerHTML = `
      <div class="section">
        <h2>Текущий баланс</h2>
        <div class="value">12 450 ₽</div>
      </div>
    `;

    return;
  }

  if (page === "activity") {
    title.textContent = "Активность";

    content.innerHTML = `
      <div class="section">
        <h2>Активность</h2>
        <p>Последние действия системы.</p>
      </div>
    `;

    return;
  }

  if (page === "settings") {
    title.textContent = "Настройки";

    content.innerHTML = `
      <div class="section">
        <h2>Настройки</h2>
        <p>Настройки панели AutoPanel.</p>
      </div>
    `;

    return;
  }
}


function showOrders() {

  title.textContent = "Заказы";

  content.innerHTML = `

    <div class="toolbar">

      <button class="primary" id="createOrder">
        + Создать заказ
      </button>

    </div>

    <div class="tablewrap">

      <div class="table-head">
        <h2>Список заказов</h2>
      </div>

      <table>

        <tr>
          <th>ID</th>
          <th>Клиент</th>
          <th>Услуга</th>
          <th>Количество</th>
          <th>Цена</th>
          <th>Статус</th>
        </tr>

        ${orders.map(order => `

          <tr>

            <td>#${order.id}</td>

            <td>${order.client}</td>

            <td>${order.service}</td>

            <td>${order.quantity}</td>

            <td>${order.price} ₽</td>

            <td>
              <span class="badge ${
                order.status === "Выполнен" ? "ok" : "warn"
              }">
                ${order.status}
              </span>
            </td>

          </tr>

        `).join("")}

      </table>

    </div>
  `;

  document
    .getElementById("createOrder")
    .addEventListener("click", showCreateOrder);
}


function showCreateOrder() {

  title.textContent = "Создать заказ";

  content.innerHTML = `

    <div class="section">

      <h2>Новый заказ</h2>

      <div class="toolbar">

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
          placeholder="Количество"
          min="1"
        >

      </div>

      <p>
        Цена:
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

    price.textContent =
      Math.round(count * rate) + " ₽";
  }

  service.addEventListener("change", calculatePrice);
  quantity.addEventListener("input", calculatePrice);

  document
    .getElementById("cancelOrder")
    .addEventListener("click", () => {
      showOrders();
    });

  document
    .getElementById("submitOrder")
    .addEventListener("click", () => {

      const link = document.getElementById("link").value.trim();
      const count = Number(quantity.value);

      if (!link) {
        alert("Введите ссылку");
        return;
      }

      if (!count || count < 1) {
        alert("Введите количество");
        return;
      }

      const newOrder = {

        id: 1000 + orders.length + 1,

        client: "admin",

        service: service.value,

        link: link,

        quantity: count,

        price: Math.round(
          Number(price.textContent.replace(" ₽", ""))
        ),

        status: "В обработке"

      };

      orders.unshift(newOrder);

      alert("Заказ создан!");

      showOrders();
    });
}


document
  .querySelectorAll(".sidebar button")
  .forEach(button => {

    button.addEventListener("click", () => {

      showPage(button.dataset.page);

      sidebar.classList.remove("open");

    });

  });


menu.addEventListener("click", () => {

  sidebar.classList.toggle("open");

});


showPage("dashboard");
