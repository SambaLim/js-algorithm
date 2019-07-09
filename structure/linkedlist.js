var mLinkedList = (function() {

    function mLinkedList() {
        this.length = 0;
        this.head = null;
    }

    function Node(data) {
        this.data = data;
        this.next = null;
    }
    
    mLinkedList.prototype.add = function(value) {
        let node = new Node(value);
        let current = this.head;

        if(!current) {
            // 노드가 없는 경우
            this.head = node;
            this.length++;
        } else {
            // 마지막 노드를 찾음
            while(current.next) {
                current = current.next;
            }
            current.next = node;
            this.length++;
        }

        return node;
    }

    return mLinkedList;

})();