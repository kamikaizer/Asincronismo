const somethingwillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Hey');
    }else{
      reject('whoops');
    }
  })
}

somethingwillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err));

  const somethingwillHappen2 = ()=>{
    return new Promise((resolve, reject) => {
      if(true){
        setTimeout(() => {
          resolve('true');
        }, 2000)
      } else {
        const error = new Error ('whoops');
        reject(error)
      }
    });
  }

  somethingwillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

// correr varias promesas encadenadas

Promise.all([somethingwillHappen(),somethingwillHappen2()])
  .then(response => {
    console.log('Araay of results', response);
  })
  .catch(err => {
    console.error(err);
  })
