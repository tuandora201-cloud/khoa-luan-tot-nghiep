const jwt=require('jsonwebtoken');const {rows}=require('../models');
const auth=async(req,res,next)=>{try{const token=req.headers.authorization?.split(' ')[1];const payload=jwt.verify(token,process.env.JWT_SECRET);const [user]=await rows('SELECT id,role,full_name,email FROM users WHERE id=? AND active=1',[payload.sub]);if(!user)throw Error();req.user=user;next()}catch{res.status(401).json({error:'Vui lòng đăng nhập lại'})}};
const roles=(...allowed)=>(req,res,next)=>allowed.includes(req.user.role)?next():res.status(403).json({error:'Không có quyền truy cập'});module.exports={auth,roles};
