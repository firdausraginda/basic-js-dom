// simple example of async js
const second = () => {
    setTimeout(() => {
        console.log('async code');
    }, 1000)
}

const first = () => {
    console.log('first');
    second()
    console.log('the end');
}

// first()

console.log('======================================');

// call back hell = callback iniside of callback in async
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974]
        console.log(recipeID);

        setTimeout(id => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' }
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = { title: 'italian pizza', publisher: 'jonas' }
                console.log(recipe2);
            }, 1500, recipe.publisher)
        }, 1500, recipeID[2])
    }, 1500)
}

// getRecipe()

console.log('======================================');

// promise

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974])
//     }, 1500)
// })

// const getRecipe2 = recID => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'}
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recID)
//     })
// }

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const recipe = {title:'italian pizza', publisher: 'jonas'}
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher)
//     })
// }

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe2(IDs[2])
// })
// .then(recipe => {
//     console.log(recipe)
//     return getRelated('agi')
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log(error);
// })

console.log('======================================');

// async await
async function getRecipeAW() {
    const IDs = await getIDs
    console.log(IDs);
    const recipe = await getRecipe2(IDs[2])
    console.log(recipe);
    const related = await getRelated('agi')
    console.log(related);

    return recipe
}

// getRecipeAW().then(result => {
//     console.log(`${result} is the best ever!`);
// })

console.log('======================================');

// making AJAX calls with fetch and promises
function getCoinInfo(coinid) {
    fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data => {
        console.log(data);
        const founder = data.team[0];
        console.log(`The founder of ${data.name} is ${founder.name}.`);
    })
    .catch(error => console.log(error));
};

// getCoinInfo('eth-ethereum');
// getCoinInfo('btc-bitcoin');

console.log('======================================');

// making AJAX calls with fetch and Async/Await
async function getCoinInfoAW(coinid){
    try{
        const result = await fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`)
        const data = await result.json()
        const founder = data.team[0];
        console.log(`The founder of ${data.name} is ${founder.name}.`);
        
        return data
    } 
    catch(error){
        console.log(error);
    }
}
getCoinInfoAW('eth-ethereum');
let bitcoin;
getCoinInfoAW('btc-bitcoin').then(data => {
    bitcoin = data
    console.log(bitcoin);
})
