export interface New{
  id: number,
  title: string,
  short_description: string,
  description: string,
  image: string,
  date: {
    day: number,
    month: string,
    year: number,
    time: string
  }
}

export interface Schedule{
  id: number,
  student_id: string,
  courses: [{
    course_id: string,
    course_name: string,
    course_type: string,
    room: string,
    online: boolean,
    professor_name: string,
    day: string[],
    start_time: number,
    duration: number
  }]
}


export const schedule = {
   id: 1,
   student_id: "21B030228",
   courses: [
      {
        course_id: "ENG",
        course_name: "Английский 2 Базовый (А2)",
        course_type: "П",
        room: "251a",
        online: false,
        professor_name: "Тасыбаев Д.Р.",
        day:[
          "Monday",
          "Wednesday",
          "Friday"
        ],
        start_time: 12,
        duration: 1
      },
     {
       course_id: "PHY",
       course_name: "Физика I (ФИТ)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Воронков В.В.",
       day:[
         "Tuesday",
       ],
       start_time: 9,
       duration: 1
     },
     {
       course_id: "MAT",
       course_name: "Матанализ II (ФИТ)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Байшемиров Ж.Д.",
       day:[
         "Tuesday",
       ],
       start_time: 11,
       duration: 1
     },
     {
       course_id: "MAT",
       course_name: "Матанализ II (ФИТ)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Байшемиров Ж.Д.",
       day:[
         "Tuesday",
       ],
       start_time: 12,
       duration: 1
     },
     {
       course_id: "PHYSICAL",
       course_name: "Физическая культура II",
       course_type: "П",
       room: "в ДМиС",
       online: false,
       professor_name: "Крутин Ю.В.",
       day:[
         "Wednesday",
       ],
       start_time: 9,
       duration: 1
     },
     {
       course_id: "PHYSICAL",
       course_name: "Физическая культура II",
       course_type: "П",
       room: "в ДМиС",
       online: false,
       professor_name: "Крутин Ю.В.",
       day:[
         "Wednesday",
       ],
       start_time: 10,
       duration: 1
     },
     {
       course_id: "PHY",
       course_name: "Физика I (ФИТ)",
       course_type: "Лаб",
       room: "",
       online: true,
       professor_name: "Кедрук Е.Ю.",
       day:[
         "Wednesday",
       ],
       start_time: 13,
       duration: 1
     },
     {
       course_id: "PHY",
       course_name: "Физика I (ФИТ)",
       course_type: "Лаб",
       room: "",
       online: true,
       professor_name: "Кедрук Е.Ю.",
       day:[
         "Wednesday",
       ],
       start_time: 14,
       duration: 1
     },
     {
       course_id: "HIS",
       course_name: "Современная история Казахстана (рус)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Абылхожин Ж.Б.",
       day:[
         "Wednesday",
       ],
       start_time: 16,
       duration: 1
     },
     {
       course_id: "HIS",
       course_name: "Современная история Казахстана (рус)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Абылхожин Ж.Б.",
       day:[
         "Wednesday",
       ],
       start_time: 17,
       duration: 1
     },
     {
       course_id: "MAT",
       course_name: "Матанализ II (ФИТ)",
       course_type: "П",
       room: "372",
       online: false,
       professor_name: "Әлімбек А.Қ.",
       day:[
         "Thursday",
       ],
       start_time: 12,
       duration: 1
     },
     {
       course_id: "MAT",
       course_name: "Матанализ II (ФИТ)",
       course_type: "П",
       room: "372",
       online: false,
       professor_name: "Әлімбек А.Қ.",
       day:[
         "Thursday",
       ],
       start_time: 13,
       duration: 1
     },
     {
       course_id: "HIS",
       course_name: "Современная история Казахстана (рус)",
       course_type: "П",
       room: "222",
       online: false,
       professor_name: "Абылхожин Ж.Б.",
       day:[
         "Friday",
       ],
       start_time: 15,
       duration: 1
     },
     {
       course_id: "PHY",
       course_name: "Физика I (ФИТ)",
       course_type: "П",
       room: "441",
       online: false,
       professor_name: "Воронков В.В.",
       day:[
         "Friday",
       ],
       start_time: 16,
       duration: 1
     },
     {
       course_id: "ICT",
       course_name: "Информационно-коммуникационные технологии (ФИТ)",
       course_type: "П",
       room: "414",
       online: false,
       professor_name: "Кажденбекова Н.С.",
       day:[
         "Friday",
       ],
       start_time: 18,
       duration: 1
     },
     {
       course_id: "ICT",
       course_name: "Информационно-коммуникационные технологии (ФИТ)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Жулдузбаев Р.М.",
       day:[
         "Saturday",
       ],
       start_time: 13,
       duration: 1
     },
     {
       course_id: "ICT",
       course_name: "Информационно-коммуникационные технологии (ФИТ)",
       course_type: "Л",
       room: "",
       online: true,
       professor_name: "Жулдузбаев Р.М.",
       day:[
         "Saturday",
       ],
       start_time: 14,
       duration: 1
     },
     ]
}

export const news = [
  {
    id: 10,
    title: "Ruslan finally made design",
    short_description: "I can't believe my eyes. We finally made a new frame after two weeks!",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'assets/Ruslan.png',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 2,
    title: "Meteorite destroying Earth",
    short_description: "We all going to die.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'data:image/jpeg;base64,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',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 3,
    title: "FREE RETAKES!!!",
    short_description: "The consul of KBTU made a decision to make ALL RETAKES FREE.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'https://cdn.corporatefinanceinstitute.com/assets/cash-money.jpg',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 4,
    title: "New WSP",
    short_description: "After 2038248923846 years KBTU has upgraded wsp. Authors of new site is Weekend Projects",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'assets/wp_logo.png',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 5,
    title: "FREE RETAKES!!!",
    short_description: "The consul of KBTU made a decision to make ALL RETAKES FREE.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'https://cdn.corporatefinanceinstitute.com/assets/cash-money.jpg',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 6,
    title: "FREE RETAKES!!!",
    short_description: "The consul of KBTU made a decision to make ALL RETAKES FREE.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'https://cdn.corporatefinanceinstitute.com/assets/cash-money.jpg',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 7,
    title: "FREE RETAKES!!!",
    short_description: "The consul of KBTU made a decision to make ALL RETAKES FREE.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'https://cdn.corporatefinanceinstitute.com/assets/cash-money.jpg',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 8,
    title: "FREE RETAKES!!!",
    short_description: "The consul of KBTU made a decision to make ALL RETAKES FREE.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'https://cdn.corporatefinanceinstitute.com/assets/cash-money.jpg',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 9,
    title: "FREE RETAKES!!!",
    short_description: "The consul of KBTU made a decision to make ALL RETAKES FREE.",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'https://cdn.corporatefinanceinstitute.com/assets/cash-money.jpg',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 1,
    title: "Young entrepreneur",
    short_description: "First-year KBTU student raised millions on his game project",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'assets/marat.png',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
  {
    id: 11,
    title: "We are number one",
    short_description: "KBTU is in the top 50 universities in the world according to QS rankings",
    description: "So will the real Shady, please stand up? And put one of those fingers, on each hand up And be proud to" +
      " be outta your mind and outta control And one more time loud as you can, how does it go? I'm Slim Shady, yes, I'm" +
      " the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please stand up?" +
      " Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim Shadys, are " +
      "just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up 'Cause I'm Slim " +
      "Shady, yes, I'm the real Shady All you other Slim Shadys, are just imitating So won't the real Slim Shady, please " +
      "stand up? Please stand up, please stand up 'Cause I'm Slim Shady, yes, I'm the real Shady All you other Slim" +
      " Shadys, are just imitating So won't the real Slim Shady, please stand up? Please stand up, please stand up Haha," +
      " guess there's a Slim Shady in all of us Fuck it, let's all stand up",
    image: 'assets/university img.png',
    date:{
      day: 22,
      month: 'APRIL',
      year: 2022,
      time: '22:56'
    }
  },
]

