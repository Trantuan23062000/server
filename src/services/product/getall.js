import db from "../../models";


const Product = async() =>{
    const product = await db.Detail.findAll({
        include: [
            {
              model: db.Products,
                include:[
                  { model: db.Images, attributes: ["id", "URL"] },
                  { model: db.Brands, attributes: ["id", "name"] },
                ]
              
            },
            {
              model: db.productVariant,include:[{model:db.Sizes},{model:db.Colors}]
            },
            
          ],
    })
    return product
}

module.exports = {Product}