
var PageLogic = (function() {

    var pageNum;
    var socket;

    function initPage(pNum) {
        pageNum = pNum;
        $(".p" + pageNum + "img0").show();
    }

    function connectToSocketServer() {
        socket = io('http://10.84.162.187:3000');

        socket.on("connect", () => {
            console.log("Page " + pageNum + " connected");
        });

        socket.on("disconnect", () => {
            console.log("Page " + pageNum + " disconnected");
        });

        socket.on("page-img-switch", (data) => {
            if (parseInt(data.page) === pageNum) {
                $(".pageImg").hide();
                $(".p" + data.page + "img" + data.img).show();
            }

            if (parseInt(data.page) === 0 && parseInt(data.img) === 0) {
                $(".pageImg").hide();
                $(".p" + pageNum + "img0").show();
            }
        });
    }

    function sendToSocketServer(channel, payload) {
        if (socket) {
            socket.emit(channel, payload);
        }
    }

    return {
        initPage: initPage,
        connectToSocketServer: connectToSocketServer,
        sendToSocketServer: sendToSocketServer
    }

})();