// 假设 tasks 是一个包含任务信息的数组，每个任务对象包括 name 和 completed 属性
const tasks = [
    { name: 'Task 1', completed: true },
    { name: 'Task 2', completed: false },
    { name: 'Task 3', completed: true }
];

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    displayStatistics();
});

// 显示任务完成统计
function displayStatistics() {
    const completedTasks = tasks.filter(task => task.completed); // 过滤已完成的任务
    const numCompletedTasks = completedTasks.length; // 计算已完成任务的数量

    const statisticsElement = document.getElementById('statistics');
    statisticsElement.textContent = `Number of tasks completed: ${numCompletedTasks}`;
}
