import React from 'react'

const DescriptionCatalogProduct = ({ catalog }) => {
    return (
        <div>
            {catalog === 'nuoc-hoa-nam' &&
                < div className='text-sm px-6 sm:px-16'>
                    Các quý ông tìm đến nước hoa để làm gì?
                    Có lẽ là để thơm tho, nam tính và làm chỉn chu thêm phong cách của bản thân, phải chứ?
                    Namperfume thấu hiểu các quý ông của chúng ta, đem tới cho đấng mày râu những mùi hương tươm tất,
                    gọn gàng, cuốn hút, đôi khi là quyền lực choáng ngợp, và chắc chắn không thể quên được sự bụi bặm phóng khoáng đặc trưng của phái mạnh.
                </div>
            }

            {catalog === 'nuoc-hoa-nu' &&
                <div className='text-sm  px-6 sm:px-16'>
                    Nước hoa từ những ngày đầu đã được tạo ra là để phục vụ cho phái đẹp,
                    vì thế dường như trong thế giới mùi hương, những sự lựa chọn cho nữ giới là phong phú và nhiều màu sắc hơn cả.
                    Là do vậy, namperfume luôn muốn đem đến cho các quý cô xinh đẹp những lựa chọn tuyệt vời, từ quyến rũ, sang trọng, quyền lực đến nhẹ nhàng, ngây thơ,
                    và không thể thiếu một chút gợi cảm lả lơi, ngả ngốn...
                </div>
            }

            {catalog === 'nuoc-hoa-mini' &&
                <div className='text-sm  px-6 sm:px-16'>
                    Nước hoa mini là những chai nước hoa nhỏ xinh được sản xuất chính hãng,
                    được chế tác và hoàn thiện tỉ mỉ,
                    nhằm giúp người dùng nước hoa có thể trải nghiệm được những mùi hương mới một cách nhanh chóng.
                    Không chỉ vậy, bạn còn có thể gặp phiên bản "travel spray" đến từ một số nhãn hàng,
                    giúp người dùng có thể dễ dàng mang theo mùi hương yêu thích của mình trong mỗi chuyến đi dài.
                </div>
            }

            {catalog === 'giftset' &&
                <div className='text-sm px-6 sm:px-16'>
                    Giftset nước hoa là lựa chọn hoàn hảo cho những dịp đặc biệt,
                    khi bạn muốn dành tặng những món quà ý nghĩa và sang trọng cho người thân, bạn bè hay đồng nghiệp.
                    Những bộ giftset thường bao gồm nước hoa, sữa tắm hoặc lotion cùng tông mùi,
                    giúp người nhận có trải nghiệm hương thơm đồng bộ và trọn vẹn.
                    Đây chính là sự kết hợp tinh tế giữa nghệ thuật tặng quà và đẳng cấp của mùi hương.
                </div>
            }

            {catalog === 'bodycare&homecare' &&
                <div className='text-sm px-6 sm:px-16'>
                    Bộ sưu tập Body & Home mang đến không gian sống và cơ thể bạn sự thư giãn tối đa bằng hương thơm tinh tế.
                    Từ nến thơm, sáp thơm đến các sản phẩm chăm sóc cơ thể như sữa tắm, dầu dưỡng và xịt phòng,
                    tất cả đều được chế tác tỉ mỉ từ các nguyên liệu cao cấp.
                    Hãy để mỗi khoảnh khắc trong ngày của bạn trở nên thư thái, đầy cảm hứng với sự hòa quyện của hương thơm từ Namperfume.
                </div>
            }
        </div>
    )
}

export default DescriptionCatalogProduct
