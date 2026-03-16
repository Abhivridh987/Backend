const cookieRoot = async (req, res) => {
    res.status(200).json({message: 'Cookie API Root'})
}

const setCookie = async (req, res) => {
    res.cookie("username", "Abhivridh", {httpOnly:true})
    res.status(200).json(
    {
            message: 'Cookie has been set'
    }
)}

const getCookie = async (req,res)=>{
    res.status(200).json(
        {
            cookies:req.cookies
        }
)}

module.exports = {
    cookieRoot, 
    setCookie,
    getCookie
}
