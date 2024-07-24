"use client"

// import node module libraries
import { v4 as uuid } from 'uuid';

export const QuizListData = [
    {
        id: uuid(),
        title: "اختبار الرياضيات الأساسي",
        image: '/assets/images/course/course-angular.jpg',
        duration : "30 دقيقة",     
        questions: 15
    },
    {
        id: uuid(),
        title: "اختبار الفيزياء الأساسي",
        image: '/assets/images/course/course-bootstrap.jpg',
        duration : "18 دقيقة",        
        questions: 20
    },
    {
        id: uuid(),
        title: "اختبار الفلسفة",
        image: '/assets/images/course/course-css.jpg',
        duration : "15 دقيقة",       
        questions: 18
    },
    {
        id: uuid(),
        title: "اختبار اللغة العربية",
        image: '/assets/images/course/course-graphql.jpg',
        duration : "35 دقيقة",      
        questions: 26
    },
    {
        id: uuid(),
        title: "اختبار التاريخ الأساسي",
        image: '/assets/images/course/course-vue.jpg',
        duration : "30 دقيقة",        
        questions: 15
    }
];

export default QuizListData;
