

$(document).ready(function(){
//==========Checking Account=========================
  $("#checking .deposit").on("click", function() {

      var ckBalance = parseInt($("#checking .balance").text().replace("$", ""));
      var ckDeposit = parseInt($("#checking .input").val());
      var ckTotal = ckBalance + ckDeposit;
      $("#checking .balance").text("$" + ckTotal);
    });
//==================== checking withdraw=====================

    $("#checking .withdraw").on("click", function() {
      var ckBalance = parseInt($("#checking .balance").text().replace("$", ""));
      var ckWithdraw = parseInt($("#checking .input").val());
      var ckTotal = ckBalance - ckWithdraw;
      $("#checking .balance").text("$" + ckTotal);
    });

//============== Saving Deposit===========================
    $("#savings .deposit").on("click", function() {
      var cvBalance = parseInt($("#savings .balance").text().replace("$", ""));
      var cvDeposit = parseInt($("#savings .input").val());
      var cvTotal = cvBalance + cvDeposit;
      $("#savings .balance").text("$" + cvTotal);
    });
//============Saving withdraw===================
    $("#savings .withdraw").on("click", function() {
      var cvBalance = parseInt($("#savings .balance").text().replace("$", ""));
      var cvWithdraw = parseInt($("#savings .input").val());
      var cvTotal = cvBalance - cvWithdraw;
      $("#savings .balance").text("$" + cvTotal);
    });
});
