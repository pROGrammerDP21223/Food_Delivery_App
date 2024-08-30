const {db_username,db_password} = process.env


export const connectionSTR="mongodb+srv://"+db_username+":"+db_password+"@cluster0.vxdq2.mongodb.net/food_delivery_app?retryWrites=true&w=majority&appName=Cluster0";



