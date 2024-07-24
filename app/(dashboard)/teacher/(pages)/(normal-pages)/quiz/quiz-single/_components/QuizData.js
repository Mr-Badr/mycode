// import node module libraries
import { v4 as uuid } from 'uuid';

export const QuizData = [
    {
        id: 1,
        question: "ما هو ناتج جمع الأعداد 5 و 7؟",
        answerSelectionType: "single",
        interface: "radio",
        answers: [
          {
            id: uuid(),
            answer: '12',
            value: 1
          },
          {
            id: uuid(),
            answer: '10',
            value: 2
          },
          {
            id: uuid(),
            answer: '8',
            value: 3
          },
          {
            id: uuid(),
            answer: '6',
            value: 4
          }
        ],
        correctAnswer: 1,
        point: 20
      },
      {
        id: 2,
        question: "ما هي قاعدة لاهوت بيرثاغورس؟",
        answerSelectionType: "single",
        interface: "radio",
        answers: [
          {
            id: uuid(),
            answer: 'أ² = ب² + ج²',
            value: 1
          },
          {
            id: uuid(),
            answer: 'أ = ب + ج',
            value: 2
          },
          {
            id: uuid(),
            answer: 'أ = ب - ج',
            value: 3
          },
          {
            id: uuid(),
            answer: 'أ = ب × ج',
            value: 4
          }
        ],
        correctAnswer: 1,
        point: 20
      },
      {
        id: 3,
        question: "ما هي القوة الناتجة عن ضغط 10 نيوتن على مساحة 2 متر مربع؟",
        answerSelectionType: "single",
        interface: "button",
        answers: [
          {
            id: uuid(),
            answer: '5 نيوتن/متر مربع',
            value: 1
          },
          {
            id: uuid(),
            answer: '10 نيوتن/متر مربع',
            value: 2
          },
          {
            id: uuid(),
            answer: '20 نيوتن/متر مربع',
            value: 3
          },
          {
            id: uuid(),
            answer: '15 نيوتن/متر مربع',
            value: 4
          }
        ],
        correctAnswer: 3,
        point: 20
      },
      {
        id: 4,
        question: "ما هو ناتج ضرب الأعداد 6 و 9؟",
        answerSelectionType: "single",
        interface: "checkbox",
        answers: [
          {
            id: uuid(),
            answer: '54',
            value: 1
          },
          {
            id: uuid(),
            answer: '63',
            value: 2
          },
          {
            id: uuid(),
            answer: '36',
            value: 3
          },
          {
            id: uuid(),
            answer: '45',
            value: 4
          }
        ],
        correctAnswer: 2,
        point: 20
      },
      {
        id: 5,
        question: "ما هو الفرق بين السرعة والسرعة الزاوية؟",
        answerSelectionType: "multiple",
        interface: "radio",
        answers: [
          {
            id: uuid(),
            answer: 'السرعة هي السرعة في خط مستقيم، والسرعة الزاوية هي السرعة حول محور',
            value: 1
          },
          {
            id: uuid(),
            answer: 'السرعة هي السرعة في خط مستقيم، والسرعة الزاوية هي السرعة في الفضاء',
            value: 2
          },
          {
            id: uuid(),
            answer: 'السرعة هي السرعة حول محور، والسرعة الزاوية هي السرعة في خط مستقيم',
            value: 3
          },
          {
            id: uuid(),
            answer: 'السرعة هي السرعة في الفضاء، والسرعة الزاوية هي السرعة حول محور',
            value: 4
          }
        ],
        correctAnswer: [1, 3],
        point: 20
      }
];

export default QuizData;
