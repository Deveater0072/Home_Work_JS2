const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
];
// zadanie 1.

const newPeople = people.map(function (item) {
  item.nickname = item.firstName.substring(0, 3).split("").reverse().join("");
  return item;
});
console.log(
  "-----------------------------------------------------------------------"
);
console.log("zadanie 1.");
// console.log(newPeople);
console.log(
  "-----------------------------------------------------------------------"
);

const reversedPeople = newPeople.map(function (item) {
  item.nickname =
    item.nickname +
    item.lastName
      .substring(item.lastName.length - 3)
      .split("")
      .reverse()
      .join("");
  return item;
});
// console.log(reversedPeople);

const lowerPeople = reversedPeople.map(function (item2) {
  item2.nickname =
    item2.nickname.charAt(0).toUpperCase() +
    item2.nickname.slice(1).toLowerCase();

  return item2;
});
// ----------------------------
console.log(lowerPeople);
// ----------------------------
// // zadanie 2.

function introduceYourself() {
  console.log(
    `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`
  );
}
lowerPeople.forEach(function (person) {
  person.introduceYourself = introduceYourself;
});
console.log(
  "-----------------------------------------------------------------------"
);
console.log("Zadanie 2.");
console.log(
  "-----------------------------------------------------------------------"
);
// ----------------------------
lowerPeople[0].introduceYourself();
lowerPeople[1].introduceYourself();
// ----------------------------

// // zadanie 3.

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

lowerPeople.forEach(function (person) {
  person.getFavouriteColor = function getFavouriteColor(number = 5) {
    if (number <= 0) {
      console.log(
        "Podałeś za małą liczbę, liczba nie może być mniejsza niż 1."
      );
    } else if (number > 30) {
      console.log(
        "Podałeś za dużą liczbę, liczba nie może być większa niż 30."
      );
    } else {
      const sum =
        this.firstName.length + this.lastName.length + this.nickname.length;
      const index2 = (sum - number) % colors.length;
      colors.map(function (item, index) {
        if (Math.abs(index2) === index) {
          console.log(item);
        }
      });
    }
  };
});
// console.log(lowerPeople);
console.log(
  "-----------------------------------------------------------------------"
);
console.log("Zadanie 3.");
console.log(
  "-----------------------------------------------------------------------"
);

// ----------------------------
lowerPeople[0].getFavouriteColor();
lowerPeople[1].getFavouriteColor();
// ----------------------------

console.log(
  "-----------------------------------------------------------------------"
);
console.log("Zadanie 4.");
console.log(
  "-----------------------------------------------------------------------"
);

// Zadanie 4.

function getFavouriteColor2(lowerPeople, number) {
  if (number <= 0) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1.");
  } else if (number > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30.");
  } else {
    const sum =
      lowerPeople.firstName.length +
      lowerPeople.lastName.length +
      lowerPeople.nickname.length;
    const index2 = (sum - number) % colors.length;
    colors.map(function (item, index) {
      if (Math.abs(index2) === index) {
        console.log(item);
      }
    });
  }
}
// ----------------------------
getFavouriteColor2(lowerPeople[0], 5);
getFavouriteColor2(lowerPeople[1], 5);
// ----------------------------
console.log(
  "-----------------------------------------------------------------------"
);
console.log("c)");
for (let person of lowerPeople) {
  console.log(`${person.firstName}  ${person.lastName}:`);
  person.getFavouriteColor();
}

console.log(
  "-----------------------------------------------------------------------"
);
console.log("Zadanie 5.");
console.log(
  "-----------------------------------------------------------------------"
);
// Zadanie 5.

let isElite = false;
let liczbaPierwsza = true;
let random = Math.floor(Math.random() * 101);
let podzielna3i5;

const resultPeople = lowerPeople
  .filter(function (item) {
    for (i = 2; i < random; i++) {
      if (random % i === 0) {
        liczbaPierwsza = false;
      }
    }
    if (random % 3 === 0 && random % 5 === 0) {
      podzielna3i5 = true;
    } else {
      podzielna3i5 = false;
    }
    if (liczbaPierwsza === true || podzielna3i5 === true) {
      isElite = true;
    }
    // jezeli isElite = true to zwraca całą tablice
    // jezeli = false to zwraca przefiltrowana talbice
    // (czesciej bedzie false)
    if (isElite) {
      return lowerPeople;
    } else {
      const lastLetter = item.firstName.slice(-1);
      const lastNameLength = item.lastName.length;
      const nicknameInclided = item.nickname.includes("a");
      if (
        (lastLetter === "o" || lastLetter === "k") &&
        lastNameLength > 5 &&
        nicknameInclided
      ) {
        return item;
      }
    }
  })
  .map((item) => {
    const nowa = {};
    for (let key in item) {
      if (key !== "introduceYourself" && key !== "getFavouriteColor")
        nowa[item[key]] = key;
    }
    return nowa;
  })
  .reduce((acc, next) => {
    return { ...acc, ...next };
  }, {});
// ----------------------------
console.log(resultPeople);
// ----------------------------
console.log(
  "-----------------------------------------------------------------------"
);
console.log("Zadanie 6.");
console.log(
  "-----------------------------------------------------------------------"
);

// zadanie 6.

function multi(a) {
  return function multi2(b) {
    return a * b;
  };
}
console.log(multi(5)(6));
const multiplyBySix = multi(6);
console.log(multiplyBySix(100));

const multiMulti = (a) => (b) => (c) => (d) => a * b * c * d;
console.log(multiMulti(4)(5)(6)(10));

console.log(
  "-----------------------------------------------------------------------"
);
console.log("Zadanie 7");
console.log(
  "-----------------------------------------------------------------------"
);

const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Zadanie 7.
function getAllNames(obj) {
  let names = [];
  if (obj.name) {
    names.push(obj.name);
  }
  if (obj.children) {
    obj.children.forEach((child) => {
      names = names.concat(getAllNames(child));
    });
  }
  return names;
}
const allNames = getAllNames(nestedObject);
console.log(allNames);

// Niestety zadania 7 nie zrobilem sam.
// Musze poswiecic troche czasu na przeanalizowanie Rekurencji

