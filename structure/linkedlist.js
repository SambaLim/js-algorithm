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
            this.head = node;
            this.length++;
            return node;
        }

    }

    return mLinkedList;

})();