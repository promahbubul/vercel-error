/**
 1. get the withdraw button and add event listener
 2. get the withdraw input number
 3. get the withdraw status element and withdraw amount
 4. newWithdrawAmount = withthdrawInput + withdrawStatus
 5. set the newWithdrawAmount in WithdrawStatusElement
 6. get the total balance 
 7. newTotalBlance = totalBalance - withdrawInput
 8. reset the withdrawinput field
 */

//  step 1:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   step 2:
  const withdrawInputField = document.getElementById("withdraw-input");
  const withdrawInputString = withdrawInputField.value;
  const withdrawInput = parseFloat(withdrawInputString);

  //   step 3:
  const withdrawStaustElement = document.getElementById("withdraw-status");
  const withdrawStatusString = withdrawStaustElement.innerText;
  const withdrawStatus = parseFloat(withdrawStatusString);

  //  step 4:
  const newWithdrawAmount = withdrawStatus + withdrawInput;
  // step 5:
  withdrawStaustElement.innerText = newWithdrawAmount;
  //   step 6:
  const totalBalanceElement = document.getElementById("total-balance");
  const totalBlanceString = totalBalanceElement.innerText;
  const totalBalance = parseFloat(totalBlanceString);

  //   step 7:
  const newTotalBalance = totalBalance - withdrawInput;
  totalBalanceElement.innerText = newTotalBalance;
  //   step 8:
  withdrawInputField.value = "";
});
