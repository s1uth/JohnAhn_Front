// for( let i = 0; i<10; i++){
//     if(i===3){
//         console.log(`it's 3`);
//     }
//     console.log(i);
// }

// const user ={
//     name:'han',
//     province: '경기도',
//     city:'성남시'
// }

// for (let x in user){
//     console.log(`${x}: ${user[x]}`);
// }

 let i = 0

// while( i< 10){
//     console.log(i)
//     i++
// }

// do {
//     console.log(i);
//     i++
// }
// while( i < 10)

const locations = ['서울','부산','경기도','대구']

//forEach
locations.forEach(function(location,index,array){
    console.log(`${index}: ${location}`)
    console.log(array);
})

//map

locations.map(function(location){
    console.log(location);
})