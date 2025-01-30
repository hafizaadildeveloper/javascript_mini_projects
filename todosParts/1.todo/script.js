const storyData = [
    {
        text: "You wake up in a mysterious forest. A note is pinned to a tree...",
        tasks: ["Read the note", "Look around"]
    },
    {
        text: "The note says: 'Follow the path to find your destiny'. You see a fork in the road...",
        tasks: ["Take the left path", "Take the right path"]
    }
];

let storyIndex = 0;

function renderStory() {
    const storyText = document.getElementById("story-text");
    const taskList = document.getElementById("task-list");

    storyText.innerText = storyData[storyIndex].text;
    taskList.innerHTML = "";

    storyData[storyIndex].tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;
        li.className = "task";
        li.onclick = () => completeTask(li, index);
        taskList.appendChild(li);
    });
}

function completeTask(taskElement, index) {
    taskElement.classList.add("completed");
    taskElement.onclick = null;

    const remainingTasks = document.querySelectorAll(".task:not(.completed)");
    if (remainingTasks.length === 0) {
        if (storyIndex < storyData.length - 1) {
            storyIndex++;
            setTimeout(renderStory, 1000);
        }
    }
}

renderStory();