var GlobalObject = {
    queId: 1
}


//när dokumentet har laddats klart
$(document).ready(function () {

    //när användaren trycker på modal send ska namnet sparas detta ska ske på modal-alla-bord upptagna
    $("#addToQue").on("click", () => {
        let firstName = $("#recipient-name").val();
        console.log(firstName)
        addToReservation(GlobalObject, firstName);
        $("#recipient-name").val("")
    })

});



function addToReservation(GlobalObject, firstName) {
    var TR = $("<tr></tr>"); // Skapa ett nytt tr-element
    var TH = $("<th></th>").attr("scope", "row").attr("id", "queId").text(GlobalObject.queId);
    var TDfirst = $("<td></td>").text(firstName);
    var closeKnapp = $("<button></button>").attr("class", "btn-close").attr("aria-label", "Close").attr("data-bs-dismiss", TR);

    /**
     * <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     */
    TR.append(TH);
    TR.append(TDfirst);
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
