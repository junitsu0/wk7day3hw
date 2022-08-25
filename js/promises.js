console.log('When In Rome')

// Callback Hell Problem is solved with Promises

/*
    In JavaScript, a promise is an object that returns a
    value which you hope to receive in the future, but
    not now.
    Has three steps:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/

// function downloadSong(songName){
//     console.log(`Searching for ${songName} in our database...`)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (songName.length > 4){
//                 resolve(`${songName}.mp4`)
//             } else {
//                 reject(`${songName} not in database`)
//             }
//         }, 5000)
//     })
// }

// let mySong = downloadSong('ABC');
// console.log(mySong);

// mySong
//     .then((val) => val.toUpperCase())
//     .then(upper => console.log(`This is it in upper: ${upper}`))
//     .catch(err => console.warn(err));

// Real Life Example
// Get the price of a user's total order based on their id
// userId -> user -> user's order -> calculate the order total

function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Searching for user #${userId} in database`);
        setTimeout(() => {
            // Set up some fake rule for if a user exists
            if (userId > 100){
                let user = {
                    id: userId,
                    username: 'johnqsample'
                }
                resolve(user)
            } else {
                reject(`No user with id #${userId}`)
            }
        }, 2000)
    })
}

function getUserOrder(user){
    console.log(`Getting the orders for ${user.username}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orders = [
                {prodName: 'Computer', price: 10000},
                {prodName: 'Picture Fram', price: 12},
                {prodName: 'Notebook', price: 5},
            ]
            resolve(orders)
        }, 1000)
    })
}

function getOrderTotal(order){
    console.log("Calculating order total:...");
    return new Promise((res, rej) => {
        setTimeout(() => {
            let total = 0;
            order.forEach(p => total += p.price);
            res(total)
        }, 1000)
    })
}

function getUsersTotalFromUserId(userId){
    getUser(userId)
        .then(user => getUserOrder(user))
        .then(order => getOrderTotal(order))
        .then(total => console.log(`User #${userId} has a total of $${total}`))
        .catch(err => console.warn(err))
}
