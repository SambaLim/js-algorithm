var mLinkedList = (function(mLinkedList) {

    let _length = 0;
    let _head = null;

    function Node(data) {
        this.data = data;
        this.next = null;
    }

    // 외부에서 실행될 함수
    mLinkedList.length = _length;
    
    mLinkedList.add = function(value) {
        let node = new Node(value);

        if(!_head) {
            _head = node;
            _length++;
            return node;
        }
    }

    return mLinkedList;

})(window.mLinkedList || {});