import {Schema, model} from 'mongoose';

export interface Seller{
    id:string;
    sellerid:string;
    email:string;
    password: string;
    name:string;
    address:string;
}

export const SellerSchema = new Schema<Seller>({
    name: {type: String, required: true},
    sellerid: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
}, {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const SellerModel = model<Seller>('seller', SellerSchema);