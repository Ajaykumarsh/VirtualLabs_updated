

fetch('/admin/StudentRes',{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
    },
})
.then((res)=>res.json())
.then((res)=>{
    var s='<th>USN</th><th>Results</th>'
    for(let i in res){
        s+=`<tr><td>${i}</td><td>${res[`${i}`]}</td></tr>`
    }
    document.getElementById('display').innerHTML=s;
})