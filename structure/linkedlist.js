var mLinkedList = (function(mLinkedList) {

    let length = 0;
    let head = null;

    function Node(data) {
        this.data = data;
        this.next = null;
    }

    mLinkedList.add = function(value) {
        let node = new Node(value);
    }

    return mLinkedList;

})(window.mLinkedList || {});