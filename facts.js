const facts = {
  windows: [
    "Did you know you can use the Windows key + L to quickly lock your computer?",
    "You can use the Snipping Tool to capture screenshots of your screen.",
    "The Task Manager can be opened by pressing Ctrl + Shift + Esc.",
    "Use Alt + Tab to switch between open windows.",
    "You can create a new virtual desktop by pressing Windows key + Ctrl + D."
  ],
  macos: [
    "You can use Command + Space to open Spotlight search.",
    "Take a screenshot of a specific area by pressing Command + Shift + 4.",
    "You can use Mission Control to see all of your open windows.",
    "Quickly look up a word's definition by force-clicking it.",
    "You can use Command + Tab to switch between open applications."
  ],
  linux: [
    "The 'sudo' command stands for 'superuser do'.",
    "You can use the 'man' command to see the manual for any other command.",
    "The 'ls' command lists the files and directories in the current directory.",
    "You can use the 'cd' command to change the current directory.",
    "The 'pwd' command shows you the present working directory."
  ],
  general: [
    "A kilobyte is 1,024 bytes, not 1,000.",
    "The first computer mouse was made of wood.",
    "The first computer virus was created in 1983.",
    "The first gigabyte hard drive was released in 1980 and weighed 550 pounds.",
    "The @ symbol was originally used in accounting to mean 'at a rate of'."
  ]
};

function getRandomFact(os = 'general') {
  let factPool = [...facts.general];
  if (os !== 'general' && facts[os]) {
    factPool.push(...facts[os]);
  }
  const randomIndex = Math.floor(Math.random() * factPool.length);
  return factPool[randomIndex];
}

module.exports = { getRandomFact };
