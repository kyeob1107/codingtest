// 프리코스로 강의 들으면서 하는 것

/* 
https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/

console.log('1')

// function solution(arr, idx) {
//     var answer = 0;
//     let sliceArr = arr.slice(idx)

//     answer = sliceArr.indexOf(1) // 2

//     if(answer==-1) return answer;

//     answer = answer + idx
//     return answer;
// }   

let arr1=[10,20,30,40,50,40,40,40,40,40,40]
console.log('40에 접근', arr1[3])

/* arr.slice()*/

console.log(arr1.slice(1,3)) //1번 이상 3번 미만의 인덱스
console.log(arr1.slice(1)) // 1번 이상, 끝까지 뽑음
console.log(arr1) //arr1은 변경 없음

/* arr.indexOf(요소) - 요소가 몇번째인지 인덱스 출력,  요소인 것과 값이 같은 것 중 인덱스 젤 먼저인걸로 나오게 됨 */
/* 요소를 못 찾았을 경우 -1로 나옴*/
console.log(arr1.indexOf(40))

/* arr.indexOf(요소, 인덱스 번호) */
/* 인덱스번호부터 요소가 해당하는 인덱스 출력 */
console.log(arr1.indexOf(40,6))


function solution(arr, idx) {
    //     var answer = 0;
    //     // [0,0,0,1] // idx 2 -> [0,0,1]
    
    //     let sliceArr = arr.slice(idx)
    
    //     answer = sliceArr.indexOf(1) // 2 , -1
        
    //     if(answer==-1) return answer;
        
    //     answer = answer + idx
    
    //     return answer;
        
        let answer = arr.indexOf(1, idx);
        return answer;
    }