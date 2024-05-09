function myInstanceOf(left, right){
    let proto = Object.getPrototypeOf(left)
    let protoType = right.protoType
    while(true){
        if(!proto) return false
        if(proto === protoType) return true
        proto = Object.getPrototypeOf(proto)
    }
}

function myInstanceOf1(left, right){
    let proto = left.__proto__
    let protoType = right.protoType
    while(true){
        if(proto === null){
            return false
        }
        if(proto === protoType){
            return true
        }
        proto = proto.__proto__
    }
}