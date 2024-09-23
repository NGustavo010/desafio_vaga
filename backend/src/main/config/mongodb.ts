import mongoose from 'mongoose';
import env from './env';

export const connectMongoDb = async () => {
    await mongoose.connect(env.mongoDbUri, {
        user: env.mongoDbUser,
        pass: env.mongoDbPassword,
    })
}

const transactionSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    nome: String,
    cpfCnpj: String,
    data: String,
    valor: Number
});

const customerSchema = new mongoose.Schema({
    cpfCnpj: {type: String, unique: true },
    nome: String,
});

export const Transaction = mongoose.model('Transaction', transactionSchema);
export const Customer = mongoose.model('Customer', customerSchema)