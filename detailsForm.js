var fb =require('./fbconfig');
var utils =require('./utils');

var detailsFormObj= 
{
    getall: (req,res)=>
    {
        fb.collection('detailsForm').get().then(snapshot=>
        {
            let data=utils.fstoarr(snapshot);
            res.send(data);
        })
    },
    getName: (req,res)=>
    {
        fb.collection('detailsForm').get().then(snapshot=>
        {
            let data=utils.fstoMap(snapshot);
            res.send(data);
        })
    },
    add: (req,res)=>
    {
        let f=req.body;
        fb.collection('detailsForm').add(f).then(success=>
            {
                var data = {
                    'id':success.id,
                }
                res.send(data);
            }).catch(err=>
            {
                    res.send(err);
            })
    },
    update: (req,res)=>
    {
        let d=req.body;
        let key=d.key;
        fb.collection('detailsForm').doc(key).set(d).then(success=>
            {res.send(success);})
            .catch(err=>
                {res.send(err);}) 
    },
    delete: (req,res)=>
    {
        let key=req.query.key; 
        fb.collection('detailsForm').doc(key).delete().then(success=>
            {res.send(success);})
    },
    getById:(req,res)=>
    {
        let id =req.query.key;
        fb.collection('detailsForm').doc(id).get().then(success=>
        {
            res.send(success.data());
            
        })
    }
}
module.exports=detailsFormObj;


