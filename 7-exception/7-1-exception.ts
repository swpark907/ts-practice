// Java : Exception;
// Javascript : Error;
// const array = new Array(1000000000000);

//Error(Exception) Handling: try -> catch -< finally

function readFile(fileName: string): string{
  if(fileName === 'not exist'){
    throw new Error('file not exist');
  }
  return 'file content';
}

function closeFile(fileName: string){
  console.log('close File');
}

const fileName = 'not exist';

try{
  console.log(readFile(fileName));
} catch(error) {
  console.log('error')
}
finally{
  closeFile(fileName)
}
// closeFile(fileName);