// Selecionar elementos HTML
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // Obter o texto da tarefa e remover espaços em branco extras

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Adicionar botão de remoção à tarefa
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = ""; // Limpar o campo de entrada
    }
}

// Event listener para adicionar tarefa quando o botão for clicado
addTaskButton.addEventListener("click", addTask);

// Event listener para adicionar tarefa quando a tecla "Enter" for pressionada no campo de entrada
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
