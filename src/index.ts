import * as algokit from '@algorandfoundation/algokit-utils';

async function main() {
    // Create random user accounts
    const algorandUser = algokit.AlgorandClient.defaultLocalNet();

    let user1 = algorandUser.account.random();
    console.log("User's address: " + user1.addr);
}

main();
