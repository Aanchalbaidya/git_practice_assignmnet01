let n=10;
 let prime=true;
 if(n==1){
    console.log('No');
 }  else { 
 for(i=2;i<n;i++){
    if(n%i===1){
        prime=false;
        break;
    }
}
 prime===true?console.log("Yes"):console.log("yes");
 }