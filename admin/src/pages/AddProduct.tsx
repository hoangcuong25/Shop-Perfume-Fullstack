/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react'
import upload from '../assets/upload.png'
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/Context';
import { AiOutlineReload } from 'react-icons/ai';

interface Product {
    name: string
    des: string
    brand: string
    type: string
    oldPrice: string
    newPrice: string
    image: string | null | File
}

const AddProduct = () => {

    const { backendUrl } = useContext(AppContext)

    const [loading, setLoading] = useState<boolean>(false)

    const [product, setProduct] = useState<Product>({
        name: '',
        des: '',
        brand: '',
        type: '',
        oldPrice: '',
        newPrice: '',
        image: null
    })


    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        setLoading(true)
        e.preventDefault()

        try {
            const { data } = await axios.post(backendUrl + '/api/admin/add-product', product, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (data.success) {
                toast.success("Thêm Sản Phẩm Thành Công")
            } else {
                toast.error(data.message)
            }

        } catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

        setLoading(false)
    }

    return (
        <div className="m-5">
            <div className="text-2xl font-bold bg-gray-100 py-3 px-16 rounded-md shadow-md mb-6">Thêm sản phẩm</div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 border border-gray-200 rounded-md shadow-md px-16 py-3">
                <div>
                    <label className="block mb-2">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={(e) => setProduct((prev) => ({ ...prev, name: e.target.value }))}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Mô tả sản phẩm</label>
                    <input
                        type="text"
                        name="des"
                        value={product.des}
                        onChange={(e) => setProduct((prev) => ({ ...prev, des: e.target.value }))}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Thương hiệu</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={(e) => setProduct((prev) => ({ ...prev, brand: e.target.value }))}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Loại</label>
                    <select
                        name="type"
                        value={product.type}
                        onChange={(e) => setProduct((prev) => ({ ...prev, type: e.target.value }))}
                        className="border p-2 w-full"
                    >
                        <option value="">Chọn loại</option>
                        <option value="Nước hoa nam">Nước hoa nam</option>
                        <option value="Nước hoa nữ">Nước hoa nữ</option>
                        <option value="Nước hoa mini">Nước hoa mini</option>
                        <option value="Giftset">Giftset</option>
                        <option value="Bodycare & Homecare">Bodycare & Homecare</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Giá cũ</label>
                    <input
                        type="number"
                        name="oldPrice"
                        value={product.oldPrice}
                        onChange={(e) => setProduct((prev) => ({ ...prev, oldPrice: e.target.value }))}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-2">Giá mới</label>
                    <input
                        type="number"
                        name="newPrice"
                        value={product.newPrice}
                        onChange={(e) => setProduct((prev) => ({ ...prev, newPrice: e.target.value }))}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Hình ảnh sản phẩm</label>
                    <label htmlFor="image">
                        <div className='inline-block relative cursor-pointer'>
                            <img className='size-36 ' src={product.image ? URL.createObjectURL(product.image as unknown as Blob) : upload} alt="" />
                            <p className='mt-3 text-sm text-center'>Tải ảnh của bạn</p>
                        </div>
                        <input
                            onChange={(e) => {
                                const file = e.target.files ? e.target.files[0] : null
                                if (file) {
                                    setProduct((prev) => ({ ...prev, image: file }))
                                }
                            }}
                            type="file"
                            id='image'
                            hidden
                        />
                    </label>
                </div>
                {loading ?
                    <div className='flex items-center justify-center w-36 rounded h-10 cursor-pointer bg-gray-300 text-center'>
                        <AiOutlineReload className='animate-spin text-green-500 text-2xl' />
                    </div>
                    : <button
                        type="submit"
                        className="bg-blue-500 text-white w-36 py-2 rounded hover:bg-blue-600">
                        Thêm sản phẩm
                    </button>}
            </form>
        </div>
    )
}

export default AddProduct
