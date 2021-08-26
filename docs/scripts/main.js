// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })

    $(".copy_yoon").click(function () {
        // navigator.clipboard.writeText("하나은행 391-910734-92207");
        // alert("신랑 윤지석 계좌번호가 복사되었습니다.");
        var inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = "하나은행 391-910734-92207";
        // inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
        alert("신랑 윤지석 계좌번호가 복사되었습니다.");
    })
    $(".copy_oh").click(function () {
        // navigator.clipboard.writeText("카카오뱅크 7979-26-15542");

        var inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = "카카오뱅크 7979-26-15542";
        // inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
        alert("신부 오진아 계좌번호가 복사되었습니다.");

    })
    // function copy_yoon() {
    //     navigator.clipboard.writeText("하나은행 391-910734-92207");
    //     alert("신랑 윤지석 계좌번호가 복사되었습니다.");
    // }
    // function copy_oh() {
    //     navigator.clipboard.writeText("카카오뱅크 7979-26-15542");
    //     alert("신부 오진아 계좌번호가 복사되었습니다.");
    // }
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});
