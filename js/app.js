const submitvalue=document.getElementById('donation-btn');
submitvalue.addEventListener('click',output);
const tableBody = document.getElementById('table-body');

function output(e){
    e.preventDefault();
    const firstNameInput=document.getElementById('f-name').value;
    const lastNameInput=document.getElementById('l-name').value;
    const fullNameInput=`${firstNameInput} ${lastNameInput}`;
    // console.log(fullNameInput);


    const streetInput=document.getElementById('street').value;
    const cityInput=document.getElementById('city').value;
    const regionInput=document.getElementById('region').value;
    const countryInput=document.getElementById('country').value;
    const addressInput=`${streetInput}, ${cityInput}, ${regionInput}, ${countryInput}`;
    // console.log(addressInput);

    const emailInput=document.getElementById('email').value;
    const phoneInput=document.getElementById('phone').value;
    const amountInput=document.getElementById('donation').value;



    const tableRow=document.createElement('tr');


    const nameData=document.createElement('td');
    const addressData=document.createElement('td');
    const emailData=document.createElement('td');
    const phoneData=document.createElement('td');
    const amountData=document.createElement('td');


    tableRow.appendChild(nameData);
    nameData.textContent=fullNameInput;

    tableRow.appendChild(addressData);
    addressData.textContent=addressInput;

    tableRow.appendChild(emailData);
    emailData.textContent=emailInput;

    tableRow.appendChild(phoneData);
    phoneData.textContent=phoneInput;

    tableRow.appendChild(amountData);
    amountData.textContent=amountInput;

    tableBody.appendChild(tableRow);

    let oddRow=document.querySelectorAll('tbody tr:nth-child(odd)');
    oddRow.forEach(row => {
    row.style.background='#ddd';
});

}
