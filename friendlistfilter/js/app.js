// UI
const filter = document.getElementById('filter');
const ulresult = document.getElementById('result');
const url = 'https://randomuser.me/api/?results=';
const totalusers= 50;

const listitems=[];


//AJAx request
async function getuser(){
    // console.log('hi');
// await keyword is only for async function
    const res =await fetch(`${url}${totalusers}`);
        // console.log(res);
    // const data =await res.json();
    // console.log(data);

    const {results} = await res.json();
    // console.log(results);

    ulresult.innerText='';


    results.forEach(result=>{
        const li = document.createElement('li');

        li.innerHTML=`<img src="${result.picture.large}" alt="${result.name.first}" />
              <div class="userinfo">
                 <h4>${result.name.first} ${result.name.last}</h4>
                 <p>${result.location.city} ${result.location.country}</p>

             </div>`;

        ulresult.appendChild(li);
        listitems.push(li);
    });



}
getuser();

// Event listener
filter.addEventListener('input' ,(e)=>filterdata(e.target.value));

// console.log(listitems);


function filterdata(search){
        // console.log(search);
    listitems.forEach(listitem=>{

        if(listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');

        }else{
            listitem.classList.add('hide');
        }

    });

}