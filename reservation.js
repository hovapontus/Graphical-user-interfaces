var GlobalObject = {
    queId: 1
}


//när dokumentet har laddats klart
$(document).ready(function () {

    //när användaren trycker på modal send ska namnet sparas detta ska ske på modal-alla-bord upptagna
    $("#addToQue").on("click", () => {
        let name = $("#queName").val();
        let antalGaster = $('#reservationAntalGaster').val();
        if (name == '') {
            alert('Vänligen fyll i Namn');
        } else {
            addToReservation(GlobalObject, name, antalGaster);
            $("#queName").val("");
        }

    });
});

function addToReservation(GlobalObject, firstName, antalGaster) {
    var TR = $("<tr></tr>"); // Skapa ett nytt tr-element
    var TH = $("<th></th>").attr("scope", "row").attr("id", "queId").text(GlobalObject.queId);
    var TDfirst = $("<td></td>").text(firstName);
    var TDsecond = $('<td></td>').text(antalGaster);
    var closeKnapp = $("<button></button>").attr("class", "btn-close");
    //tar bort hela tr elementet när man trycker på knappen
    closeKnapp.on("click", function () {
        $(this).closest("tr").remove();
    });


    TR.append(TH);
    TR.append(TDfirst);
    TR.append(TDsecond);
    TR.append(closeKnapp);

    // Lägg till tr-elementet i tbody
    $("#tbody").append(TR);

    //plussar på med ett med 
    uppdateQueID(GlobalObject);
}


function uppdateQueID(GlobalObject) {
    ++GlobalObject.queId;
    return GlobalObject.queId;
}
