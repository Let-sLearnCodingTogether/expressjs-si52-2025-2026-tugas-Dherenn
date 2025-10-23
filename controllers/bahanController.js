import { response } from "express";
import bahanModel from "../model/bahanModel.js";

export const listBahan = async (req,res) => {
    try{const data = await bahanModel.find({})
    res.status(200).json({
        message: "Daftar Bahan:",
        data : data
    })

    }catch (error){
        res.status(500).json({
            message: error,
            data: null
        })
    }
}

export const createBahan = async (req,res)=>{
    try{const request = req.body
        console.log(request)
        const response = await bahanModel.create({
            ingredientName : request.ingredientName,
            quantity : request.quantity,
            expiryDate : request.expiryDate
        })
        res.status(201).json({
            mahasiswa: "Bahan berhasil ditambahkan",
            data: response
        })

    }catch(error){
        res.status(500).json({
            error : error.message
        })
    }
}

export const updateBahan = async (req,res) => {
    try{const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                message : "Ingredient Name Wajib Diisi",
                data: response
            })
        }
        console.log(request)
        const response = await bahanModel.findByIdAndUpdate(id, {
            ingredientName: request.ingredientName,
            quantity: request.quantity,
            expiryDate: request.expiryDate
        })

        if(!response){
            return res.status(500).json({
                message: "Bahan Gagal Diupdate :'(",
                data: response
            })
        }

        return res.status(200).json({
            message: "Bahan Berhasil Diupdate :D"
        })

    }catch (error){
        res.status(500).json({
            message: error,
            data: null
        })
    }
}

export const deleteBahan = async (req,res)=>{
    try{
        const id = req.params.id
        if(!id){
            res.status(204).json({
                message: "Ingredient Name Wajib Diisi",
                data: response
            })
        }
        const response = await bahanModel.findByIdAndDelete(id)
        if(response) {
            res.status(500).json({
                message : "Bahan Berhasil Dihapus",
                data: null
            })
        }
        return res.status(404).json({
            message: "Bahan Tidak Ditemukan",
            date: null
        })

    }catch (error){
        res.status(500).json({
            message : error,
            data: null
        })
    }
}