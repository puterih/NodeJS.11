const yargs = require("yargs");
const { simpanContact } = require("./contacts");
// // Mengambil argument dari command line
// const command = process.argv[2];
// if (command === "add") {
//   // menambahkan contact
// } else if (command === "remove") {
//   // menghapus contact
// } else if (command === "list") {
//   // menampilkan semua contact yg ada di dalam file json
// }
/* Note: Atau bisa menggunakan module npm yargs fungsinya mengelola argumen pada command line
yargs membantu untuk membuat command line yg interaktif dengan lakukan parsing(membaca argument) secara elegant
*/

// inisialisasi project sebagai project npm.

// Mencoba mengambil arguments menggunakan yargs
// console.log(yargs.argv); // argv untuk melihat bagaimana yargs mengelola argument

// .command(cmd, desc, [builder], [handler])
yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
    noHP: {
      describe: "Nomor Handphone",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    simpanContact(argv.nama, argv.noHP, argv.email);
  },
});

yargs.parse();
