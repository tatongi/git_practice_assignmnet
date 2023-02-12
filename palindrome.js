let s1="";
    let s2="";
    for (let i=0;i<str.length;i++){
        s1+=str[i];
    }
    for (let j=str.length-1;j>=0;j--){
        s2+=str[j];
    }
    if(s1==s2){
        console.log("Yes");
    }
    else{
        console.log("No")
    }