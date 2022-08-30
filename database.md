npx sequelize-cli model:generate --name data_transaction --attributes trans_date:date,dataUserId:string,dataProductId:integer,qty_order:integer,total_order:float

npx sequelize-cli model:generate --name data_product --attributes product_name:string,premium:float
npx sequelize-cli model:generate --name data_user --attributes user_name:string,password:string,active:integer
