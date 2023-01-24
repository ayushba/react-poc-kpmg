import React, { useState, useEffect } from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import SegmentTabs from '../../components/segmentTabs/SegmentTabs';
import { AiOutlineClose } from "react-icons/ai";

import './ProductList.css'

const categoryList = ['Mens', 'Womens', 'Kids']
const subSegmentsList = ['Shirt', 'Trouser', 'Blazzer', 'Jacket']

const ProductList = () => {

    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedSubSegments, setSelectedSubSegments] = useState([])
    const [productList, setProductList] = useState([])

    useEffect(() => {

        const tmpProdList = []

        const decidedCategoryList = selectedCategory.length ? selectedCategory : categoryList;
        const decidedSubSegList = selectedSubSegments.length ? selectedSubSegments : subSegmentsList

        decidedCategoryList.map(category => {
            decidedSubSegList.map(subSeg => {
                for (var i = 1; i < 5; i++) {
                    tmpProdList.push({
                        image: require(`../../images/${category.toLowerCase()}/${subSeg.toLowerCase()}/${subSeg.toLowerCase()}_${i}.jpeg`),
                        title: "title 1",
                        price: "1000",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    })
                }
            })
        })
        setProductList(tmpProdList)

    }, [selectedCategory, selectedSubSegments])

    return (
        <>


            <SegmentTabs tabs={['Mens', 'Womens', 'Kids']} setSelectedCategory={setSelectedCategory} />
            <div style={{ display: "flex" }}>
                <div style={{ width: "25%", padding: "10px" }}>
                    {selectedSubSegments.map(selSubSeg =>
                        <div className='item-selected'>
                            <p style={{ margin: 0 }}>{selSubSeg}</p>
                            <AiOutlineClose
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    const tmpArr = [...selectedSubSegments]
                                    tmpArr.splice(tmpArr.indexOf(selSubSeg), 1)
                                    setSelectedSubSegments(tmpArr)
                                }} />
                        </div>
                    )}
                    <div className='sub-segments-container'>
                        {subSegmentsList.map(subSeg => (
                            <p
                                className='sub-segment'
                                onClick={() => {
                                    if (selectedSubSegments.indexOf(subSeg) === -1)
                                        setSelectedSubSegments([...selectedSubSegments, subSeg])
                                }}
                            >
                                {subSeg}
                            </p>
                        )
                        )}
                    </div>
                </div>
                <div className='product-list-container'>
                    {productList.map(product => {
                        return (
                            <ProductItem product={product} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductList