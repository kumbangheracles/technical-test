const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

function no1() {
  const no1 = fruits.map((item) => {
    return item.fruitName;
  });
  console.log(no1);
}

function no2() {
  const no2 = fruits.reduce((acc, item) => {
    if (!acc[item.fruitType]) {
      acc[item.fruitType] = { totalWadah: 0, buah: [] };
    }
    acc[item.fruitType].buah.push(item.fruitName);
    acc[item.fruitType].totalWadah += 1;
    return acc;
  }, {});
  Object.entries(no2).forEach(([type, data]) => {
    console.log(`Tipe Buah: ${type}`);
    console.log(`Jumlah Wadah: ${data.totalWadah}`);
    console.log(`Buah: ${data.buah.join(", ")}`);
    console.log("----------------------------------------------------");
  });
}

function no3() {
  const totalStock = fruits.reduce(
    (acc, item) => {
      if (item.fruitType === "LOCAL") {
        acc.local += item.stock;
      } else if (item.fruitType === "IMPORT") {
        acc.import += item.stock;
      }
      return acc;
    },
    { local: 0, import: 0 }
  );

  console.log(`Total Stock Local: ${totalStock.local}`);
  console.log(`Total Stock Import: ${totalStock.import}`);
}

no1();
console.log("\n");
no2();
console.log("\n");
no3();
