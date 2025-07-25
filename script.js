// Shared logic to expose today for consistent date testing
function getToday() {
  // Use GMT+3 for time-based unlocking
  const now = new Date();
  const gmt3 = new Date(now.getTime() + (3 * 60 * 60 * 1000));
  return gmt3.toISOString().slice(0, 10);
}

console.log("Script loaded.");

window.addEventListener('DOMContentLoaded', () => {
  const riddles = [
    { date: '2025-07-08', title: 'Riddle 1', path: 'riddles/riddle1.html' },
    { date: '2025-07-10', title: 'Riddle 2', path: 'riddles/riddle2.html' },
    { date: '2025-07-12', title: 'Riddle 3', path: 'riddles/riddle3.html' },
    { date: '2025-07-14', title: 'Riddle 4', path: 'riddles/riddle4.html' },
    { date: '2025-07-16', title: 'Riddle 5', path: 'riddles/riddle5.html' },
    { date: '2025-07-18', title: 'Riddle 6', path: 'riddles/riddle6.html' },
    { date: '2025-07-20', title: 'Riddle 7', path: 'riddles/riddle7.html' },
    { date: '2025-07-22', title: 'Riddle 8', path: 'riddles/riddle8.html' },
    { date: '2025-07-24', title: 'Riddle 9', path: 'riddles/riddle9.html' },
    { date: '2025-07-26', title: 'Riddle 10', path: 'riddles/riddle10.html' },
	{ date: '2025-07-28', title: 'Riddle 11', path: 'riddles/riddle11.html' }
  ];

  const list = document.getElementById('riddle-list');
  if (!list) return;

  const today = getToday();
  riddles.forEach((riddle) => {
    const li = document.createElement('li');
    const isUnlocked = today >= riddle.date;
    if (isUnlocked) {
      li.innerHTML = `<a href="${riddle.path}">${riddle.title} - Open</a>`;
    } else {
      li.innerHTML = `<span>${riddle.title} - 🔒 Locked until ${riddle.date}</span>`;
    }
    list.appendChild(li);
  });
});
