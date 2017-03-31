

$(document).ready(function(){

  ///Declare the variable
var balance = $("#checking .balance");
var input = $("#checking .input");
var deposit = $("#checking .deposit");
//==========Checking Account=========================
      (deposit).on("click", function() {

      var ckBalance = parseInt((balance).text().replace("$", ""));
      var ckDeposit = parseInt((input).val());
      var ckTotal = ckBalance + ckDeposit;
      (balance).text("$" + ckTotal);
    });
//==================== checking withdraw=====================
      var checkbalance = $("#checking .balance");
      var checkInput = $("#checking .input");
      var checkWithDraw = $("#checking .withdraw");

    (checkWithDraw).on("click", function() {
      var ckBalance = parseInt($(checkbalance).text().replace("$", ""));
      var ckWithdraw = parseInt((checkInput).val());
      var ckTotal = ckBalance - ckWithdraw;
      (checkbalance).text("$" + ckTotal);
    });

//============== Saving Deposit===========================

      var saveDeposit = $("#savings .deposit");
      var savebalance = $("#savings .balance");
      var saveInput = $("#savings .input");

            (saveDeposit).on("click", function() {
      var cvBalance = parseInt((savebalance).text().replace("$", ""));
      var cvDeposit = parseInt((saveInput).val());
      var cvTotal = cvBalance + cvDeposit;
       (savebalance).text("$" + cvTotal);
    });
//============Saving withdraw===================
      var saveWithdraw = $("#savings .withdraw");
      
        $(saveWithdraw).on("click", function() {
      var cvBalance = parseInt($("#savings .balance").text().replace("$", ""));
      var cvWithdraw = parseInt($("#savings .input").val());
      var cvTotal = cvBalance - cvWithdraw;
      $("#savings .balance").text("$" + cvTotal);
    });
});
