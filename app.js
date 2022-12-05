const container=document.querySelector(".container")
function getData(){
    const request=new XMLHttpRequest();

    request.onload=function(){
        const response=this.responseText;
        const result=JSON.parse(response);
        const data=result.data
        
        data.map((data)=>{
            const card=document.createElement("div");
            card.classList.add("card");
            container.append(card);
            //img
            const img=document.createElement("img");
            img.classList.add("avatar")
            img.src=data.avatar;
            card.append(img);
            //title
            const title=document.createElement('h3');
            title.classList.add("title");
            title.innerHTML=`${data.first_name} `;
            card.append(title)
            //email
            const email=document.createElement("li");
            email.classList.add("email");
            email.innerHTML=data.email;
            card.append(email);
        })
    }

    

      request.open("GET","https://reqres.in/api/users?page=2");
       request.send()

}
getData();