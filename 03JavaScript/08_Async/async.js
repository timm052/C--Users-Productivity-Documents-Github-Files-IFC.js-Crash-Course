//Default
console.log("First");

const user1 = getUser(1234);
console.log(user1);

console.log("Second");

function getUser(id) {
  setTimeout(() => {
    //Call Server
    return { id, name: "Ansoni" };
  }, 2000);
}

// Callbacks
function logUser(user2) {
  console.log(`Name: ${user2.name}`);
}

function getUsercall(id, callback) {
  setTimeout(() => {
    //Call Server
    const user2 = { id, name: "Ansoni" };
    logUser(user2);
  }, 2000);
}

console.log("First");

const usercall = getUsercall(1234);
console.log(usercall, logUser);

console.log("Second");

// Promises
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user3 = {id, name: "Ansoni3" };
        resolve(user3);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

getUserPromise(1234).then((user3) => {
    console.log(`Name: ${user3.name}`);
})

// Async / Await
async function logUser() {
    const user = await getUserPromise(1234);
    console.log(`Name: ${user.name}`);
}