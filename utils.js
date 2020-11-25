var myutils ={
    fbtoarr: (fbobj) =>
    {
        let returnarr =[];
        for(let k in fbobj)
        {
            let obj ={};
            obj =fbobj[k];
            obj.key=k;
            returnarr.push(obj);
        }
        return returnarr;
    },
    fstoarr: (fbobj) =>
    {
        let returnarr =[];
        fbobj.forEach((doc) => {
            returnarr.push(doc.data());
        });
        return returnarr;
    },
    fstoMap: (fbobj) =>
    {
        let returnarr =[];
        fbobj.forEach((doc) => {
            returnarr.push({
                'id':doc.id,
                'name':doc.data()['name'],
                'bname':doc.data()['bname'],
                'orderno':doc.data()['orderno']});
                
        });
        return returnarr;
    }
}
module.exports=myutils;