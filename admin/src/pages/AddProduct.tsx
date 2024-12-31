import React, { useContext, useState } from 'react'
import upload from '../assets/upload.png'
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/Context';

interface Product {
    name: string;
    des: string;
    brand: string;
    type: string;
    oldPrice: string;
    newPrice: string;
    image: File | null;
}

const AddProduct = () => {

    const { backendUrl } = useContext(AppContext)

    const [product, setProduct] = useState<Product>({
        name: '',
        des: '',
        brand: '',
        type: '',
        oldPrice: '',
        newPrice: '',
        image: null
    })


    const handleSubmit = async (e: React.FormEvent) => {
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

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Thêm sản phẩm</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                            <img className='size-36 ' src={product.image ? URL.createObjectURL(product.image) : upload} alt="" />
                            <p className='mt-3 text-sm text-center'>Tải ảnh của bạn</p>
                        </div>
                        <input
                            onChange={(e) => { setProduct((prev) => ({ ...prev, image: e.target.files[0] })) }}
                            type="file"
                            id='image'
                            hidden
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    )
}

export default AddProduct
