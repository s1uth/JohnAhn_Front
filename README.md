# JohnAhn_Front

## John Ahn 강의 정리 

### 변수
``` 
var, let, const
```

||||
|---|---|---|
| var | 중복선언과 재할당이 가능  | 함수 레벨 스코프 |
| let | 중복선언은 불가, 재할당 가능 | 믈록 레벨 스코프 |
| const | 중복선언과 재할당 둘 다 불가 | 블록레벨 스코프 |

##### 호이스팅(hoisting)
끌어올리다.      
     
var 선언 호이스팅       
초기화 되기 전에 undefined 값이 할당되어 사용할 수 있게 된다.
```javascript
console.log(greeting)
// undefined
var greeting = "hello"
```

함수 선언 호이스팅
```javascript
func();
function func(){
    console.log('hoisting test);
}
```
### 타입
|Primitive Type||||Object Type|||
|---|---|---|---|---|---|---|
|function| 함수| | |array | 배열 |
|string | 문자열 | | |classes | class |
|number | 숫자 | | |object | 객체 |
|boolean | 논리 |
|null | 값없음 |
|undefined | 초기화 되지 않은 변수|
|symbol| 변경 불가능한 유일한 값|

    기본적으로 Primitive Type은 call stack에 저장이 되고
    object type은 heap에 저장이 된다.
    이때 call stack의 개체 및 배열 값이 아닌 heap 메모리 참조 ID를 값으로 저장함

JavaScript의 변수는 느슨한 타입의 동적 언어다.  
같은 변수가 여러 타입을 가질 수 있고 
타입 명시가 필요 없다. 

