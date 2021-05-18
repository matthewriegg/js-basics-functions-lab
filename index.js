//`distanceTravelledInFeet`: Calculates the number of feet a passenger travels
//given a starting block and an ending block — it only calculates distance North
//and South (uptown/downtown). It uses the knowledge that a block is 264 feet
//long.

//* `calculatesFarePrice`: Given the same starting and ending block as the
//previous test (_hint hint_), return the fare for the customer. The first four
//hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
//cents per foot (not including 400, which are free!). Then Scuber charges a
//flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
//does not allow any rides over 2500 feet — the function returns `'cannot travel
//that far'` if a ride over 2500 feet is requested.

//blocks from HQ:

  function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return (blocks - 42)
    } else {
        return (42 - blocks)
    }
}

console.log(distanceFromHqInBlocks(50));


//feet from HQ:

function distanceFromHqInFeet(blocks) {
    if (blocks > 42) {
        return (blocks - 42)*264
    } else {
        return (42 - blocks)*264
    }
}

console.log(distanceFromHqInFeet(50));


//distance travelled in feet:


function distanceTravelledInFeet(blockStart, blockEnd) {
    return Math.abs(blockStart - blockEnd)*264;
    }


console.log(distanceTravelledInFeet(50, 5));

//Sample function:

let fare;
function calculatesFarePrice(start, destination) {
    const distance = (Math.abs(start - destination)*264)
    if (distance < 400){
        return 0;
        }

    else if (distance >= 400 && distance < 2000){
        return 0.02*(distance - 400);
        }
    else if (distance > 2000 && distance < 2500){
        return 25;
        } 

    else {
        return 'cannot travel that far'
    }

   

}
calculatesFarePrice(43, 44);
console.log(fare);







//function distanceFromHqInFeet(_feet) {
  //  function distanceFromHqInBlocks(blocks) {
  //      if (blocks > 42) {
  //          return (blocks - 42)*264
   //     } else {
   //         return (42 - blocks)*264
   //     }
   // } distanceFromHqInBlocks(blocks)
    
//}
//distanceFromHqInFeet(50)






//distanceFromHqInFeet(42+/-(pickUpLocation)  * 264)
//distanceFromHqInFeet(42+/-(blocks) * 264)















