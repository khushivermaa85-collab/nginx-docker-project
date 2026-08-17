fetch("/api")
    .then(response => response.json())
    .then(result => {
        document.getElementById("message").textContent = result.message;

        const dataList = document.getElementById("data");

        result.data.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            dataList.appendChild(listItem);
        });
    })
    .catch(error => {
        document.getElementById("message").textContent =
            "Unable to connect to backend";
        console.error(error);
    });
