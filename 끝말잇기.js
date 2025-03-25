const people = prompt("인원이 몇 명입니까?");
let order=1, cnt=1;
let firstL="", lastL="";
let flag=true;
let arr = [];

if(people>1) flag=true;
else flag=false;

let word = prompt("첫 단어를 입력하세요.")

 while(flag){
            if(cnt>=2) {
            word = prompt(order + "번 님, " + cnt + "번째 순서입니다.\n'" + lastL + "'로 시작하는 단어를 입력하세요.");
            }

            // [🛡️ 안전 장치] 사용자가 취소하거나 아무것도 입력 안 했을 경우
            if(word === null || word.trim() === ""){
                flag = false;
                break;
            }

            //첫 순서
            if(arr.length<1){
                PassWord(word);
            }
            //성공 not 첫 순서
            else if(arr.indexOf(word)<0 && word.slice(0,1)===arr[arr.length-1].slice(-1)){
                PassWord(word);
            }
            //실패
            else{
                flag=false;
            }
 }

if(!flag){
    alert("게임이 끝났습니다.");
}

function PassWord(word){
    firstL = word.slice(0,1);
    lastL = word.slice(-1);
    arr.push(word);
    cnt++;
    if(order<people) order++;
    else order=1;
}