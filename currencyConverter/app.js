const url= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr";
const dropdowns=document.querySelectorAll('.fromTo select')

for(let select of dropdowns)
{
    for(let currCode in countryList)
    {
let newOption=document.createElement('option')
newOption.innerText=currCode;
newOption.value=currCode;
select.append(newOption)
    }
}