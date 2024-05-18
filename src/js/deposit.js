/**
 1. get the deposit button and add event listener
 2. get the deposit input value
 3. get the despsit status element and deposti value
 4. new deposit ammout = old deposit ammount + deposit input ammount
 5. set the new depost amount in deposit satus
 6. get the total ammount value
 7. new Total balance = total balance + deposit input
 8. set the new total Balance in total Balance status
 9. rest deposit input field
 */

//  step 1:
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   step 2:
  const depolitInputField = document.getElementById("deposit-input");
  const depolitInputString = depolitInputField.value;
  const depositInput = parseFloat(depolitInputString);

  //   step 3:
  const depositStatusElement = document.getElementById("deposit-status");
  const depositStatusString = depositStatusElement.innerText;
  const depositStatus = parseFloat(depositStatusString);

  //   step 4:
  const newDepositAmount = depositStatus + depositInput;
  //   step 5:
  depositStatusElement.innerText = newDepositAmount;
  //   step 6:
  const totalBalanceElement = document.getElementById("total-balance");
  const totalBalanceString = totalBalanceElement.innerText;
  const totalBalance = parseFloat(totalBalanceString);

  console.log(totalBalanceElement);

  //  step 6:
  const newTotalBalance = totalBalance + depositInput;
  //  step 8:
  totalBalanceElement.innerText = newTotalBalance;
  //   step 9:
  depolitInputField.value = "";
});
