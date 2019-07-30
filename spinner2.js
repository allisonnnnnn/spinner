const spin = function(char, timeIncrement) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}  `);
  }, timeIncrement);
};

const change = function() {
  const char = ["|", "/ ", "-", "\\", "|", "/", "-", "\\"];
  let timeStart = 300;
  setTimeout(() => {
    console.log("\n");
  }, timeStart * char.length + 1);
  for (let item of char) {
    spin(item, timeStart);
    timeStart += 300;
  }

  // console.log(timeStart * char.length);
};

change();
