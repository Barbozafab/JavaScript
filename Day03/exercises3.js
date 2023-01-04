console.log("========== LEVEL 3 ==========");

// 1.
console.log(`${now.getFullYear()}-${now.getMonth() + 1 < 10 ? '0' : ''}${now.getMonth() + 1}-${now.getDate() < 10 ? '0' : ''}${now.getDate()} ${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`);
console.log(`${now.getDate() < 10 ? '0' : ''}${now.getDate()}-${now.getMonth() + 1 < 10 ? '0' : ''}${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`);
console.log(`${now.getDate() < 10 ? '0' : ''}${now.getDate()}/${now.getMonth() + 1 < 10 ? '0' : ''}${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`);

