# JohnAhn_Front

## John Ahn 강의 정리 
---

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
---
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

#### Tamplate Literal
`을 이옹한 문자열   
줄바꿈을 쉽게 할 수 있고 표현식을 넣어주기가 쉬워졌다.

``` javascript
const a = 5
const b = 3

console.log(`두 수 a와 b의 합은 ${a+b}이다.`)
```

------

### 반복문

||||
|---|---|---|
| for | 가장 일반적인 반복문 |
| for/in | 객체의 속성에 따라 반복 |
| while | 지정된 조건이 true인 동안 반복 |
| do/while | 조건문 이전 코드를 한번 실행하고 반복 |

#### for vs. forEach

forEach는 배열 요소에 접근하는 새로운 방식이다.     
break사용한 루프 중단은 사용할 수 없고,     
비동기 처리할 시에 await와 사용할 때 완벽하게 동작하지 않는다.  
처리 속도면에서는 일반적으로 for문이 빠르다고 한다.

### Window Object
브라우저에 의해서 생성되며 웹브라우저의 화면 자체를 가리킨다.       
javascript의 객체가 아니다.

||||
|---|---|---|
|innerWidth |
