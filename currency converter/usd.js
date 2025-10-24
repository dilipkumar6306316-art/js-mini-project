

const BASE_URL= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


const dropdowns=document.querySelectorAll(".dropdown select");

const btn =document.querySelector("form button");  //from buton nhi chutiye form button hoga kitna minute galati ho sakti hai shoc
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for(let select of dropdowns) {

  for(currCode in countryList){

        let newOption=document.createElement("option");

        newOption.innerText=currCode;
        newOption.value=currCode;


        if(select.name === "from" && currCode === "USD"){
    newOption.selected="selected";


  }

  else if(select.name === "to" && currCode ==="INR"){
    newOption.selected="selected";

  }

  select.append(newOption);


}

select.addEventListener("change", (evt) => {
    updateFlage(evt.target);
});

}
//update flag ko pass ker denge
const updateFlage = (element) => {
  

  let currCode = element.value;
  let countryCode = countryList[currCode];


  let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  console.log(amtVal);

  if(amtVal === "" || amtVal < 1){

    amtVal = 1;
    amount.value = "1";

  }

  console.log(fromCurr.value);
  
  //const URL = `${BASE_URL}/${fromcurr}.json`;


});




