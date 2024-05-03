var GlobalObject = {
    queId: 1
}


//när dokumentet har laddats klart
$(document).ready(function () {

    let firstName = $("#firstName").text
    let lastName = $("#lastName").text
    // var queId = 2;
    // var firstName = 4;
    // var lastName = 3;
    addToReservation(GlobalObject, firstName, lastName);
    addToReservation(GlobalObject, firstName, lastName);
    addToReservation(GlobalObject, firstName, lastName);
    addToReservation(GlobalObject, firstName, lastName);
    addToReservation(GlobalObject, firstName, lastName);
    addToReservation(GlobalObject, firstName, lastName);

});


function addToReservation(GlobalObject, firstName, lastName) {
    var TR = $("<tr></tr>"); // Skapa ett nytt tr-element
    var TH = $("<th></th>").attr("scope", "row").attr("id", "queId").text(GlobalObject.queId);
    var TDfirst = $("<td></td>").text("nameVariabel");
    var TDLast = $("<td></td>").text("lastname");


    TR.append(TH);
    TR.append(TDfirst);
    TR.append(TDLast);

    // Lägg till tr-elementet i tbody
    $("#tbody").append(TR);

    //plussar på med ett med 
    uppdateQueID(GlobalObject);
}


function uppdateQueID(GlobalObject) {
    ++GlobalObject.queId;
    return GlobalObject.queId;
}