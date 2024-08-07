# JohnAhn_Front

## John Ahn 강의 정리 

#### 변수
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

