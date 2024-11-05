// 프리코스로 강의 들으면서 하는 것

/* 
https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/

// function 함수이름(){
//     // 함수의 내용
//     return 0
// }

// 배열?
// 배열은 여러 개의 데이터를 가지고 있는 꾸러미
let arr = [1,2,3,4,5,11,12,13]
console.log("안녕하세요")
// let arr1 = ['a', 123, true]
// console.log(arr1)
console.log(arr)


// 배열 길이
console.log("길이는",arr.length)

// arr의 첫번째 데이터에 접근
console.log(arr[0]) // arr옆에 띄워쓰기 쓰는 사람도 있는데 가급적 하지 말기
console.log(arr[7])
console.log(arr[arr.length-1])

// 반복문 방법 3가지 존재

let sum = 0
// 1. 기본 for문 //잘보이게 하기 위해 ;사이에 띄워쓰기 추가해줬음
// for(let 초기값 ; 범위 ; 증감식)
for(let i=0 ; i<10 ; i++){
    // 반복하고 싶은 문장
    console.log(i)
}

// sum = 0
// sum = sum + arr[0] >> 1
// ...
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
    sum = sum + arr[i]
}

console.log('최종합산값',sum)
let average = sum / arr.length
console.log('평균값',average)

// 2. for ~ of 문
// 배열에서만 사용할 수 있는 반복문
// for(let 배열요소에 접근할 변수 of 배열의 이름)
let sum2 = 0
for(let el of arr){
    console.log(el)
    sum2 = sum2 + el
}

console.log('최종합산값2', sum2)

// 3. forEach // 기본 문법이 아니고 함수(반복함수)임, 위 2방법은 기본 문법
// 이름이 없는 익명함수라는 것을 매개변수에 넣어 줄 것임 원래 매개변수 3개인데 그냥 2개만 해볼 것임
let sum3 = 0
arr.forEach(function (el, i){
    // console.log('el', el)
    // console.log('i', i)
    // console.log('---------')
    sum3 = sum3 + el
})

console.log('최종합산값3', sum3)