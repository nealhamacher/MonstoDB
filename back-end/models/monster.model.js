import mongoose from "mongoose";

const GeoSchema = mongoose.Schema(
    {
        "lat": { type: String},
        "lng": { type: String}
    }
);

const AddressSchema = mongoose.Schema(
    {
        "street": { type: String},
        "suite": { type: String},
        "city": { type: String},
        "zipcode": { type: String},
        "geo": {type: GeoSchema}
    }
);

const CompanySchema = mongoose.Schema(
    {
        "name": { type: String},
        "catchPhrase": { type: String },
        "bs": { type: String }
    }
);

const MonsterSchema = mongoose.Schema(
    {
        "id": { type: Number, required: true },
        "name": { type: String, required: true },
        "username": { type: String, required: true },
        "email": {type: String, required: true},
        "address": { type: AddressSchema },
        "phone": { type: String},
        "website": { type: String},
        "company": {type: CompanySchema},
        "image_url": {type: String, required: true}
    }
);

const Monster = mongoose.model("Monster", MonsterSchema)

export default Monster;