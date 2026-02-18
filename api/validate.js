export default function handler(req,res){
    if(req.method !== "POST"){
        return res.status(405).json({error:"USE POST RE"})
    }

    const body = req.body;

    let res = {}

    if(body.type==="mobile"){

        response = {
            valid:/^\d{10}$/.test(body.value),
            message:"Mobile validation result"
        }
    }else if(body.type==="Email"){
        response = {
            valid:body.value.includes("@"),
            message:"Email Success"
        };
    }else{
        response = {
            error:"Unknown type"
        }
    }

    return res.status(200).json(response)
}