fetch("https://api.escuelajs.co/api/v1/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const list = document.getElementById("user-list");
    const table = document.getElementById("table-data");

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <img src="${user.avatar}" width="50" alt="${user.name}">
        </td>
      `;
      table.appendChild(tr);
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
