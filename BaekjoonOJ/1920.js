/**
 * 문제
 * N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
 * 
 * 입력
 * 첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다.
 * 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 
 * 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 
 * 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 
 * 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.
 * 
 * 5
 * 4 1 5 2 3
 * 5
 * 1 3 7 9 5
 * 
 * 출력
 * M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.
 * 
 * 1
 * 1
 * 0
 * 0
 * 1
 */

let str = '1 3 7 9 5';
let A = ['1','5','6','3','2']; // A 라는 배열 존재하고 이 안에 X라는 정수 존재

function getString(str) {
    if(str.length > 1) {

        const array = str.split(' ');
        let temp = [];

        for (i = 0; i < array.length; i++){
            for (j=0; j < A.length; j++) {
                if( array[i] === A[j]) {
                    temp.push(i);
                }
            }
        }

        let temp2 = [];
        let count = 0;

        for (i = 0; i < array.length; i++) {

            if (i === temp[count]) {
                temp2.push('1');
                count++;
            } else {
                temp2.push('0');
            }
        }
        
        return temp2;
    }
    for (i = 0; i < A.length ;i++){
        if( A[i] === str) {
            return 1;
        }
    }
    return 0;
}

console.log(getString(str));