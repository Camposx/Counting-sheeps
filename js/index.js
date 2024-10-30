function countSheeps(list){
    let sheeps = 0;
    let wolves = 0;

    for(let i = 0; i < list.length; i++){
        if (list[i] == true){
            sheeps++;
        }
        if(list[i] == false){
            wolves++;
        }  
    };
    if(sheeps){
        console.log(`There are ${sheeps} sheep in total`)
    }
    if(!sheeps && wolves){
        console.log("UPS!!! Wolfs eaten Sheeps")
    }
    if(!sheeps && !wolves){
        console.log("There are neither sheep or wolves")
    }
}

let list = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, 
    true,  false, false, true , true,  true,  true,  true , false, false, true,  true];
countSheeps(list);

let list2 = [false, false, false];
countSheeps(list2);