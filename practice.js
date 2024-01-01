function getBlood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const blood = "🩸";
      resolve(blood);
    }, 2000);
  });
}

function getOragn(blood) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const organ = blood + "🫁";
      resolve(organ);
    }, 2000);
  });
}

function getHeart(organ) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heart = organ + "🫀";
      resolve(heart);
    }, 2000);
  });
}

async function system(){
    const blood = await getBlood();
    console.log("Here is blood ", blood);
    const organ = await getOragn(blood);
    console.log("Organ created ", organ);
    const heart = await getHeart(organ);
    console.log("Heart is ready to donate", heart)
}

system()


//! then and catch method for promisese
// getBlood()
//   .then((blood) => {
//     console.log("Here is blood ", blood);
//     return getOragn(blood);
//   })
//   .then((organ) => {
//     console.log("Organ created ", organ);
//     return getHeart(organ)

//   })
//   .then((heart)=>{
//     console.log("Heart is ready to donate", heart)
//   })
