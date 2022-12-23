const generateRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomId = (listVideos) => {
    const max = listVideos.length - 1;
    const index = generateRandomIntegerInRange(0, max);
    console.log("🚀 ~ file: func.navbar.js:10 ~ generateRandomId ~ listVideos", listVideos)
    return listVideos[index].id;
}

export { generateRandomId }; 