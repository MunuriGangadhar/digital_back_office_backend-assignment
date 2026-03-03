const directions=["N","E","S","W"];

const rotateLeft=(current)=>{
     const index=directions.indexOf(current);
     return directions[(index+3)%4];
}

const rotateRight=(current)=>{
     const index=directions.indexOf(current);
     return directions[(index+1)%4];
}

const isValidDirection=(dir)=>directions.includes(dir);

module.exports={rotateLeft,rotateRight,isValidDirection};
