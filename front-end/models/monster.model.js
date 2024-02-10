import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
    {
        "name": { type: String, required: true },
        "username": { type: String, required: true },
        "email": {type: String, required: true},
        "address": { type: AddressSchema },
        "phone": { type: String},
        "website": { type: String},
        "company": {type: CompanySchema},
        "image_url": {type: Strinf, required: true}
    }
)

const AddressSchema = mongoose.Schema(
    {
        "street": { type: String},
        "suite": { type: String},
        "city": { type: String},
        "zipcode": { type: String},
        "geo": {type: GeoSchema}
    }
)

const GeoSchema = mongoose.Schema(
    {
        "lat": { type: String},
        "lng": { type: String}
    }
)

const CompanySchema = mongoose.Schema(
    {
        "name": { type: String},
        "catchPhrase": { type: String },
        "bs": { type: String }
    }
)