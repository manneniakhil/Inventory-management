export default class ProductModel{
    constructor(_id,_name,_desc,_price,_imageUrl){
        this.id=_id;
        this.name=_name;
        this.desc=_desc;
        this.price=_price;
        this.imageUrl=_imageUrl;
    }

    static get(){
        return products;
    }
    static update(productObj){
        //console.log(productObj)
        const index = products.findIndex((p)=>p.id==productObj.id);
        console.log(index)
        products[index]=productObj;
    }
    static add(newObject){
        let  newProduct=new ProductModel(
            products.length+1,
            newObject.name,
            newObject.desc,
            newObject.price,
            newObject.imageUrl
        )
        products.push(newProduct)

    }

    static getById(id){
        return products.find((p)=>p.id==id); 
    }
    static delete(id){
        const index=products.findIndex((p=>p.id==id));
        products.splice(index,1);

    

    }

}
var products=[new ProductModel(
    1,
    'Product 1',
    'Description for product 1',
    19.99,
    "https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-z-flip5/defaultimage/lavender-hero-zoom.png"
),
new ProductModel(
    2,
    'Product 2',
    'Description for product 2',
    29.99,
    "https://d2e6ccujb3mkqf.cloudfront.net/8c80f73a-180c-480e-9905-f44b12aa02df-1_f87e5411-02d1-45dc-b699-9ef11b769e40.jpg"
),

]  