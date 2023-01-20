import { nanoid } from 'nanoid'

export const questions = [
  {
    id: nanoid(10),
    question: 'Яке море вважається найтеплішим у світі?',
    answers: [
      {
        id: 1,
        answer: 'Азовське море',
        status: false,
      },
      {
        id: 2,
        answer: 'Червоне море',
        status: true,
      },
      {
        id: 3,
        answer: 'Аравійське море',
        status: false,
      },
      {
        id: 4,
        answer: 'Мертве море',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Який острів являється найбільшим за своєю площею на планеті?',
    answers: [
      {
        id: 1,
        answer: 'Гренландія',
        status: true,
      },
      {
        id: 2,
        answer: 'Мадагаскар',
        status: false,
      },
      {
        id: 3,
        answer: 'Суматра',
        status: false,
      },
      {
        id: 4,
        answer: 'Ява',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'В якому з перерахованих озер тече не прісна, а солона вода?',
    answers: [
      {
        id: 1,
        answer: 'Озеро Ньяса',
        status: false,
      },
      {
        id: 2,
        answer: 'Байкал',
        status: false,
      },
      {
        id: 3,
        answer: 'Дон Жуан',
        status: true,
      },
      {
        id: 4,
        answer: 'Світязь',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Відомо, що Землю називають блакитною планетою, так як на ній багато водойм. Тож, скільки відсотків поверхні Землі вкриті водним масивом',
    answers: [
      {
        id: 1,
        answer: '50%',
        status: false,
      },
      {
        id: 2,
        answer: '95%',
        status: false,
      },
      {
        id: 3,
        answer: '64%',
        status: false,
      },
      {
        id: 4,
        answer: '70%',
        status: true,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Назвіть єдине місто, яке розташоване одночасно в двох частинах світу',
    answers: [
      {
        id: 1,
        answer: 'Дамаск',
        status: false,
      },
      {
        id: 2,
        answer: 'Стамбул',
        status: true,
      },
      {
        id: 3,
        answer: 'Мехіко',
        status: false,
      },
      {
        id: 4,
        answer: 'Гавана',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'На території якої країни знаходиться 17 діючих вулканів?',
    answers: [
      {
        id: 1,
        answer: 'Японія',
        status: true,
      },
      {
        id: 2,
        answer: 'Китай',
        status: false,
      },
      {
        id: 3,
        answer: 'США',
        status: false,
      },
      {
        id: 4,
        answer: 'Канада',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Яка з країн володіє найменшою територією у всьому світі?',
    answers: [
      {
        id: 1,
        answer: 'Монако',
        status: false,
      },
      {
        id: 2,
        answer: 'Гондурас',
        status: false,
      },
      {
        id: 3,
        answer: 'Ватикан',
        status: true,
      },
      {
        id: 4,
        answer: 'Люксембург',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Назвіть найглибшу точку на планеті, що знаходиться під товщею води',
    answers: [
      {
        id: 1,
        answer: 'Маріанська западина',
        status: true,
      },
      {
        id: 2,
        answer: 'Западина Романш',
        status: false,
      },
      {
        id: 3,
        answer: 'Східно-Індійська западина',
        status: false,
      },
      {
        id: 4,
        answer: 'Западина Тонга',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Яка пустеля вважається найбільш посушливою у світі?',
    answers: [
      {
        id: 1,
        answer: 'Сахара',
        status: false,
      },
      {
        id: 2,
        answer: 'Каракуми',
        status: false,
      },
      {
        id: 3,
        answer: 'Атакама',
        status: true,
      },
      {
        id: 4,
        answer: 'Пустеля Гобі',
        status: false,
      },
    ]
  },
  {
    id: nanoid(10),
    question: 'Через яку кількість країн світу проходить екватор?',
    answers: [
      {
        id: 1,
        answer: '13',
        status: true,
      },
      {
        id: 2,
        answer: '29',
        status: false,
      },
      {
        id: 3,
        answer: '17',
        status: false,
      },
      {
        id: 4,
        answer: '8',
        status: false,
      },
    ]
  },
];