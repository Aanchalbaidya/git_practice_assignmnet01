let n=10;
 let prime=true;
 if(n==1){
    console.log("No);
 }  else { 
 for(let i=2;i<=n/2;i++){
    if(n%i===0){
        prime=false;
        break;
    }
}
 prime===true?console.log("Yes"):console.log("No");
 }
