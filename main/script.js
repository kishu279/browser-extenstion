async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("todoId").innerHTML = res[0].id;
  document.getElementById("title").innerHTML = res[0].title;
  document.getElementById("completed").innerHTML = res[0].completed;
}

fetchData();
