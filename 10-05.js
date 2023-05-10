let tasks = [
    {
        id: 1,
        name: "Comprar pão",
        description: "Comprar pão na padaria da esquina",
        isDone: false
    },
    {
        id: 2,
        name: "Fazer exercícios",
        description: "Fazer 30 minutos de exercícios físicos",
        isDone: false
    },
    {
        id: 3,
        name: "Estudar Express.js",
        description: "Estudar a documentação do Express.js",
        isDone: true
    }
]

server.get("/tasks", (req, res) => {
    res.json({
        tasks: tasks
    })
})

server.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        description: req.body.description,
        isDone: false
    }
    tasks.push(newTask)
    res.json({
        task: newTask
    })
})

server.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => {
        return task.id === id;
    })
    if (!task) {
        return res.status(404).json({message: "Task not found"});
    }
    task.name = req.body.name;
    task.description = req.body.description;
    task.isDone = req.body.isDone;
    res.json({
        task
    })
})

server.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => {
        return task.id !== id;
    })
    res.status(204).send();
})

const port = 8080;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
