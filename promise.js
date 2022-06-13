const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == undefined || emosi == "") {
      reject("Error ! Data is null");
    } else if (emosi == "marah") {
      (async () => {
        const thaeterIXX = hitung(await promiseTheaterIXX(), emosi);
        const thaeterVGC = hitung(await promiseTheaterVGC(), emosi);
        const totMarah = thaeterIXX + thaeterVGC;
        resolve(totMarah);
      })();
    } else if (emosi == "tidak marah") {
      (async () => {
        const thaeterIXX = hitung(await promiseTheaterIXX(), emosi);
        const thaeterVGC = hitung(await promiseTheaterVGC(), emosi);
        const totTidakMarah = thaeterIXX + thaeterVGC;
        resolve(totTidakMarah);
      })();
    }
  });
}

function hitung(data, emosi) {
  let poin = 0;
  for (let i = 0; i < data.length; i++) {
    if (emosi == "marah") {
      if (data[i].hasil == "marah") {
        poin++;
      }
    } else {
      if (data[i].hasil == "tidak marah") {
        poin++;
      }
    }
  }
  return poin;
}

module.exports = {
  promiseOutput,
};
