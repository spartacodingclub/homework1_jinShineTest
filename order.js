function order() {

    let orderer = $("#order-name");
    let quantity = $("#order-quantity");
    let address = $("#order-address");
    let phone = $("#order_phone");

    if (orderer.val() == "") {
        alert("이름을 입력해주세요")
        orderer.focus()
        return
    }

    if (quantity.val() == 0) {
        alert("수량을 입력해주세요")
        quantity.focus()
        return
    }

    if (address.val() == "") {
        alert("주소를 입력해주세요")
        address.focus()
        return
    }

    if (phone.val() == "") {
        alert("휴대폰번호를 입력해주세요")
        phone.focus()
        return
    } 

    alert("주문 완료!")
}