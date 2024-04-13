class ExampleItem {
  constructor(name, phone, email, product) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.product = product;
  }
}

const testData = [
  new ExampleItem(
    "Роман Манек",
    parseInt("+375445073309"),
    "man12@mail.ru",
    "course-js"
  ),
  new ExampleItem(
    "Вера Павлова",
    parseInt("+375495233309"),
    "asd232@mail.ru",
    "course-html"
  ),
  new ExampleItem(
    "Эльдар Иманов",
    parseInt("+375339002376"),
    "HYT234@mail.ru",
    "course-js"
  ),
  new ExampleItem(
    "Регина Исаак",
    parseInt("+375229804556"),
    "new123@jmail.ru",
    "course-vue"
  ),
  new ExampleItem(
    "Дамир Бондарейко",
    parseInt("+375445078894"),
    "manj08@mail.ru",
    "course-php"
  ),
  new ExampleItem(
    "Катрина Малеш",
    parseInt("+375295076409"),
    "hhh34@mail.ru",
    "course-html"
  ),
  new ExampleItem(
    "Мия Церук",
    parseInt("+375339004566"),
    "xxl099@mail.ru",
    "course-html"
  ),
  new ExampleItem(
    "Юрий Гай",
    parseInt("+375229803266"),
    "gay-90@jmail.ru",
    "course-vue"
  ),
  new ExampleItem(
    "Дмитрий Черно",
    parseInt("+375445078349"),
    "Dm_12@mail.ru",
    "course-php"
  ),
  new ExampleItem(
    "Вадим Усов",
    parseInt("+375295120409"),
    "ttt123@mail.ru",
    "course-php"
  ),
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

export default function getRandomData() {
  const index = getRandomIndex(testData.length);
  return testData[index];
}
